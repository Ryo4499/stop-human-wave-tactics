FROM oven/bun:alpine

ARG HOST_UID
ARG HOST_GID
ARG MY_USER
ARG MY_GROUP
ARG NODE_ENV

# measures Webpack Memory leak
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN apk update && \
    apk add shadow libressl-dev libffi-dev tzdata wget curl && \
    usermod -l ${MY_USER} bun && \
    groupmod -n ${MY_GROUP} bun && \
    usermod -d /home/${MY_USER} -m ${MY_USER}


USER $MY_USER

WORKDIR "${HOME}/stop-human-wave-tactics-frontend"

RUN chown $HOST_UID:$HOST_GID -R ./

COPY --chown=$HOST_UID:$HOST_GID ./package.json .
COPY --chown=$HOST_UID:$HOST_GID ./bun.lockb .
COPY --chown=$HOST_UID:$HOST_GID ./public/ ./

ENV PATH=${HOME}/stop-human-wave-tactics-frontend/node_modules/.bin:$PATH

RUN if [ "${NODE_ENV}" = "production" ]; then \
    bun install --production --frozen-lockfile; \
    else \
    bun install; \
    fi

