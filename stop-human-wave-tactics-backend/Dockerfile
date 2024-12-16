FROM python:3.12-alpine

ARG HOST_UID=1000
ARG HOST_GID=1000
ARG HOST_USER='user'
ARG HOST_GROUP='user'
ARG TZ='Etc/UTC'

ENV TZ $TZ
ENV UV_LINK_MODE copy

RUN apk update && \
    apk add --no-cache sudo shadow tzdata bash zsh vim curl wget pipx && \
    groupadd -g ${HOST_GID} ${HOST_GROUP} && \
    useradd -u ${HOST_UID} -g ${HOST_GID} -d /home/${HOST_USER} -s /bin/zsh -m ${HOST_USER} && \
    chown -R ${HOST_USER}:${HOST_GROUP} /home/${HOST_USER} && \
    echo "${HOST_USER} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${HOST_USER} && \
    chmod 0440 /etc/sudoers.d/${HOST_USER} && \
    echo $TZ > /etc/timezone && \
    ln -sf /usr/share/zoneinfo/$TZ /etc/localtime

USER ${HOST_USER}

WORKDIR /home/${HOST_USER}/app

ENV PATH="$PATH:/home/${HOST_USER}/.local/bin"

RUN pipx ensurepath && \
    pipx install uv

COPY --chown=${HOST_USER}:${HOST_GROUP} pyproject.toml uv.lock .python-version .

RUN uv sync
