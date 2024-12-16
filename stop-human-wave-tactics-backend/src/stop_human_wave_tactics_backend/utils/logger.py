from logging import config, LogRecord, setLogRecordFactory
from pathlib import Path
from .io import read_yml


class BracketStyleRecord(LogRecord):
    """loggingのメッセージをformatメソッドで書式化するためのクラス"""

    def getMessage(self) -> str:
        """メッセージを書式化する

        Returns:
            str: 書式化されたメッセージ
        """
        msg = str(self.msg)  # see logging cookbook
        if self.args:
            try:
                msg = msg % self.args  # retro-compability for 3rd party code
            except TypeError as e:
                if e.args and "not all arguments converted" in e.args[0]:
                    # "format" style
                    msg = msg.format(*self.args)
                else:
                    raise  # other Errors, like type mismatch
        return msg


def setup_logger(config_path: str):
    """ロガーにymlの設定値を反映させる

    Args:
        config_path (str): ロガーの設定値を記載したymlのパス
    """
    conf = read_yml(config_path)
    # filenameのディレクトリが存在しない場合は作成する
    for i in conf.get("handlers").values():
        for key, val in i.items():
            if key == "filename":
                path = Path(val)
                if not path.parent.exists():
                    path.parent.mkdir(parents=True, exist_ok=True)
    setLogRecordFactory(BracketStyleRecord)
    # ロガーの設定値を反映させる
    config.dictConfig(conf)
