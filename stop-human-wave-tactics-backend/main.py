from pathlib import Path
from src.stop_human_wave_tactics_backend.configs.app_config import AppConfig
from src.stop_human_wave_tactics_backend.utils.logger import setup_logger


def main():
    config_path = Path("app_config.yml")
    app_config = AppConfig.read_config(config_path)
    config_path = Path("logger_config.yml")
    setup_logger(config_path)
    breakpoint()


if __name__ == "__main__":
    main()
