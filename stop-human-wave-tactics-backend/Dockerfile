FROM python:3.12-slim
WORKDIR /app
RUN pip install --no-cache-dir uv
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project
COPY main.py ./
COPY src ./src
USER 65532:65532
EXPOSE 8000
CMD [".venv/bin/granian", "--interface", "asgi", "--host", "0.0.0.0", "--port", "8000", "main:app"]
