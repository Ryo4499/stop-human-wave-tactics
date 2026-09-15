from pathlib import Path
from typing import Literal
from dataclasses import dataclass
from ...utils.io import read_yml


@dataclass
class ImageConfig:
    max_width: int = 1200
    max_height: int = 1200
    quality: int = 85
    optimize: bool = True
    keep_original: bool = True
    supported_formats: Literal[".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"]

    @staticmethod
    def read_config(config_path: Path) -> "ImageConfig":
        conf = read_yml(config_path)
        return ImageConfig(
            conf.get("max_width", 1200),
            conf.get("max_height", 1200),
            conf.get("quality", 85),
            conf.get("optimize", True),
            conf.get("keep_original", True),
            conf.get(
                "supported_formats", [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"]
            ),
        )
