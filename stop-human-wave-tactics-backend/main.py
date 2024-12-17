import uvicorn
import strawberry
from fastapi import FastAPI
from strawberry.asgi import GraphQL
from typing import List


@strawberry.type
class Book:
    id: int
    title: str
    author: str


@strawberry.type
class Query:
    @strawberry.field
    def books(self) -> List[Book]:
        return [
            Book(id=1, title="GraphQLの入門", author="山田太郎"),
            Book(id=2, title="FastAPIで作るWeb API", author="鈴木次郎"),
        ]


def create_app():
    # config_path = Path("app_config.yml")
    # app_config = AppConfig.read_config(config_path)
    # config_path = Path("logger_config.yml")
    # setup_logger(config_path)
    schema = strawberry.Schema(query=Query)
    graphql_app = GraphQL(schema)
    app = FastAPI()

    @app.get("/")
    async def root():
        return {"message": "Hello GraphQL with FastAPI and Granian!"}

    app.mount("/graphql", graphql_app)
    return app


app = create_app()
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
