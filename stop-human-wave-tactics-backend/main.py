from contextlib import asynccontextmanager
from os import environ

import strawberry
from fastapi import FastAPI
from sqlalchemy import URL
from src.stop_human_wave_tactics_backend.entities.schemas import Mutation, Query
from src.stop_human_wave_tactics_backend.infrastructure.database import Base, Database
from strawberry.fastapi import GraphQLRouter


def create_app():
    database_url = URL.create(
        "postgresql+asyncpg",
        username=environ["POSTGRES_USER"],
        password=environ["POSTGRES_PASSWORD"],
        host=environ.get("DATABASE_HOST", "db"),
        port=int(environ.get("DATABASE_PORT", "5432")),
        database=environ["POSTGRES_DB"],
    )
    db = Database(database_url)

    @asynccontextmanager
    async def lifespan(app):
        # Local archive runner: create missing tables without altering existing data.
        async with db.engine.begin() as connection:
            await connection.run_sync(Base.metadata.create_all)
        yield
        await db.engine.dispose()

    app = FastAPI(lifespan=lifespan)

    async def get_context():
        return {"db": db}

    app.include_router(
        GraphQLRouter(
            strawberry.Schema(query=Query, mutation=Mutation),
            context_getter=get_context,
        ),
        prefix="/graphql",
    )

    @app.get("/health")
    async def health():
        async with db.engine.connect() as connection:
            from sqlalchemy import text

            await connection.execute(text("SELECT 1"))
        return {"status": "ok"}

    return app


app = create_app()
