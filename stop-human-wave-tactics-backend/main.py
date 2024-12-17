import uvicorn
import strawberry
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from pathlib import Path
from src.stop_human_wave_tactics_backend.entities.configs.app_config import AppConfig
from src.stop_human_wave_tactics_backend.utils.logger import setup_logger
from src.stop_human_wave_tactics_backend.entities.schemas import Query, Mutation
from src.stop_human_wave_tactics_backend.infrastructure.database import Database


def create_app():
    config_path = Path("app_config.yml")
    app_config = AppConfig.read_config(config_path)
    config_path = Path("logger.yml")
    setup_logger(config_path)
    app = FastAPI()

    # データベース接続の初期化
    db = Database(app_config.db_url)

    async def get_context() -> dict[str, Database]:
        return {"db": db}

    schema = strawberry.Schema(query=Query, mutation=Mutation)
    # GraphQLルーターの設定
    graphql_app = GraphQLRouter(schema=schema, context_getter=get_context)

    # GraphQLエンドポイントの追加
    app.include_router(graphql_app, prefix="/graphql")

    @app.get("/")
    async def root():
        return {"message": "Hello GraphQL with FastAPI and Granian!"}

    return app


app = create_app()
if __name__ == "__main__":
    uvicorn.run(app)
