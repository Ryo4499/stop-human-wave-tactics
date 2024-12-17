from yaml import safe_load
from os import environ
from pathlib import Path
from ...utils.io import read_text
from string import Template
from sqlalchemy import URL
from dataclasses import dataclass


@dataclass
class AppConfig:
    debug: bool
    db_url: URL

    @staticmethod
    def read_config(config_path: Path) -> "AppConfig":
        yaml_text = read_text(config_path)
        template = Template(yaml_text)
        yaml_with_env = template.substitute(environ)
        conf = safe_load(yaml_with_env)
        db_name = read_text(Path(conf.get("db_name", ""))).strip()
        db_user = read_text(Path(conf.get("db_user", ""))).strip()
        db_pass = read_text(Path(conf.get("db_pass", ""))).strip()
        db_url = URL.create(
            drivername=conf.get("db_driver", ""),
            username=db_user,
            password=db_pass,
            host=conf.get("db_host", ""),
            port=conf.get("db_port", ""),
            database=db_name,
        )
        return AppConfig(
            True if conf.get("debug", "") == "development" else False,
            db_url,
        )
