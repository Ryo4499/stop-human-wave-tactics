from yaml import safe_load
from typing import Any
from pathlib import Path


def read_text(file_path: Path) -> str:
    """ファイルを読み込み、文字列として返す

    Args:
        file_path (Path): ファイルのパス

    Returns:
        str: ファイルの中身
    """
    with open(file_path, "r") as f:
        return f.read()


def read_yml(config_path: Path) -> dict[str, Any]:
    """ymlを読み込み、dictとして返す

    Args:
        config_path (str): ymlのパス

    Raises:
        e: ymlが見つからない場合

    Returns:
        dict[str, Any]: ymlの設定値を格納したdict
    """
    try:
        with open(config_path, "r") as f:
            conf = safe_load(f)
    except FileNotFoundError as e:
        raise e
    return conf
