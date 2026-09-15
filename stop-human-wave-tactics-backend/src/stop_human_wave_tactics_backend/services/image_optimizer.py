import re
import asyncio
from pathlib import Path
from ..entities.configs.image_config import ImageConfig
import os
from typing import Optional, Tuple
from PIL import Image
from logging import getLogger

logger = getLogger(__name__)


class ImageOptimizer:
    def __init__(
        self, content_dir: Path, image_dir: Path, config: Optional[ImageConfig] = None
    ):
        self.content_dir = Path(content_dir)
        self.image_dir = Path(image_dir)
        self.config = config or ImageConfig()
        self.processed_images = None

    async def process_markdown_files(self):
        """すべてのMarkdownファイルを処理"""
        md_files = list(self.content_dir.rglob("*.md"))
        logger.info(f"Found {len(md_files)} markdown files")

        async with asyncio.TaskGroup() as tg:
            for md_file in md_files:
                tg.create_task(self.process_file(md_file))

    async def process_file(self, md_path: Path):
        """個別のMarkdownファイルを処理"""
        try:
            logger.info(f"Processing {md_path}")
            content = md_path.read_text(encoding="utf-8")

            updated_content = await self.process_images(content, md_path)

            if updated_content != content:
                md_path.write_text(updated_content, encoding="utf-8")
                logger.info(f"Updated {md_path}")

        except Exception as e:
            logger.error(f"Error processing {md_path}: {e}")

    async def process_images(self, content: str, md_path: Path) -> str:
        """Markdown内の画像を処理して最適化"""
        image_pattern = r"!$([^$]*)$$([^)]+)$"

        def replace_image(match):
            alt_text = match.group(1)
            image_path = match.group(2)

            if image_path.startswith(("http://", "https://")):
                return match.group(0)

            try:
                absolute_image_path = self._resolve_image_path(image_path, md_path)
                if not absolute_image_path.exists():
                    logger.warning(f"Image not found: {absolute_image_path}")
                    return match.group(0)

                if (
                    absolute_image_path.suffix.lower()
                    not in self.config.supported_formats
                ):
                    logger.info(f"Skipping unsupported format: {absolute_image_path}")
                    return match.group(0)

                if absolute_image_path not in self.processed_images:
                    optimized_path = self._optimize_image(absolute_image_path)
                    self.processed_images.add(absolute_image_path)
                else:
                    optimized_path = absolute_image_path.with_suffix(".webp")

                relative_path = self._get_relative_path(optimized_path, md_path)

                return f"![{alt_text}]({relative_path})"

            except Exception as e:
                logger.error(f"Error processing image {image_path}: {e}")
                return match.group(0)

        return re.sub(image_pattern, replace_image, content)

    def _resolve_image_path(self, image_path: str, md_path: Path) -> Path:
        """画像の絶対パスを解決"""
        image_path = image_path.replace("%20", " ")

        relative_to_md = md_path.parent / image_path
        if relative_to_md.exists():
            return relative_to_md.resolve()

        relative_to_images = self.image_dir / image_path
        if relative_to_images.exists():
            return relative_to_images.resolve()

        return Path(image_path)

    def _get_image_info(self, image: Image.Image) -> Tuple[str | None, bool]:
        """画像の情報を取得"""
        format = image.format
        has_alpha = image.mode in ("RGBA", "LA") or (
            image.mode == "P" and "transparency" in image.info
        )
        return format, has_alpha

    def _optimize_image(self, image_path: Path) -> Path:
        """画像を最適化してWebPに変換"""
        try:
            with Image.open(image_path) as img:
                original_format, has_alpha = self._get_image_info(img)
                logger.info(
                    f"Processing {image_path} (Format: {original_format}, Alpha: {has_alpha})"
                )

                if (
                    img.width > self.config.max_width
                    or img.height > self.config.max_height
                ):
                    img.thumbnail((self.config.max_width, self.config.max_height))

                webp_path = image_path.with_suffix(".webp")

                if has_alpha:
                    img.save(
                        webp_path,
                        format="WEBP",
                        lossless=True,
                        quality=100,
                    )
                else:
                    img.save(
                        webp_path,
                        format="WEBP",
                        quality=self.config.quality,
                        optimize=self.config.optimize,
                    )

                logger.info(f"Converted to WebP: {webp_path}")

                if not self.config.keep_original:
                    image_path.unlink()
                    logger.info(f"Deleted original: {image_path}")

                return webp_path

        except Exception as e:
            logger.error(f"Error optimizing {image_path}: {e}")
            return image_path

    def _get_relative_path(self, target_path: Path, reference_path: Path) -> str:
        """参照パスからターゲットパスへの相対パスを取得"""
        try:
            return str(Path(os.path.relpath(target_path, reference_path.parent)))
        except ValueError:
            return str(target_path)
