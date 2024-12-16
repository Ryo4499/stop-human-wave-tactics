from yaml import safe_load
from os import environ
from pathlib import Path
from pydantic import BaseModel, Field
from ..utils.io import read_text
from string import Template


class AppConfig(BaseModel):
    host: str = Field(default="", title="host", description="host")
    port: int = Field(default=8000, title="port", description="port")
    debug: bool = Field(default=False, title="debug", description="debug")
    db_host: str = Field(default="", title="db_host", description="db_host")
    db_port: int = Field(default=5432, title="db_port", description="db_port")
    db_name: str = Field(default="", title="database_name", description="database_name")
    db_user: str = Field(default="", title="database_url", description="database_url")
    db_pass: str = Field(
        default="", title="database_password", description="database_password"
    )
    db_driver: str = Field(
        default="postgresql", title="database_driver", description="database_driver"
    )

    @staticmethod
    def read_config(config_path: Path) -> "AppConfig":
        yaml_text = read_text(config_path)
        template = Template(yaml_text)
        yaml_with_env = template.substitute(environ)
        conf = safe_load(yaml_with_env)
        db_name = read_text(Path(conf["db_name"])).strip()
        db_user = read_text(Path(conf["db_user"])).strip()
        db_pass = read_text(Path(conf["db_pass"])).strip()
        return AppConfig(
            host=conf["host"],
            port=conf["port"],
            debug=True if conf["debug"] == "development" else False,
            db_host=conf["db_host"],
            db_port=conf["db_port"],
            db_name=db_name,
            db_user=db_user,
            db_pass=db_pass,
            db_driver=conf["db_driver"],
        )
