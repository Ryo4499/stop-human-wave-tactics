FROM node:20-alpine

ARG HOST_UID
ARG HOST_GID
ARG HOST_USER
ARG HOST_GROUP
ARG NODE_ENV
ARG TZ

ENV TZ $TZ

RUN apk update && \
    apk add shadow libressl-dev libffi-dev tzdata wget curl && \
    echo $TZ > /etc/timezone && \
    ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && \
    npm install -g npm && npm install -g --force yarn && \
    npm install -g npm-check-updates && mkdir /node_modules && \
    usermod -l ${HOST_USER} -d /home/${HOST_USER} node && \
    groupmod -n ${HOST_GROUP} node && \
    usermod -d /home/${HOST_USER} -m ${HOST_USER} && \
    chown ${HOST_USER}:${HOST_GROUP} /node_modules

USER $HOST_USER

WORKDIR "/home/${HOST_USER}/stop-human-wave-tactics-frontend"

RUN chown $HOST_USER:$HOST_GROUP -R ./

COPY --chown=$HOST_USER:$HOST_GROUP ./.yarnrc .
COPY --chown=$HOST_USER:$HOST_GROUP ./package.json .
COPY --chown=$HOST_USER:$HOST_GROUP ./yarn.lock .
COPY --chown=$HOST_USER:$HOST_GROUP ./public/ ./

ENV PATH=/node_modules/.bin:$PATH

RUN if [ "${NODE_ENV}" = "production" ]; then \
    yarn install --frozen-lockfile --force ; \
    else \
    yarn install ; \
    fi

