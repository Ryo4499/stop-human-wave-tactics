FROM node:18-alpine

ARG HOST_UID
ARG HOST_GID
ARG MY_USER
ARG MY_GROUP
ARG NODE_ENV
ARG TZ

ENV TZ $TZ

# measures Webpack Memory leak
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN apk update && \
  apk add shadow libressl-dev libffi-dev tzdata && \
  echo $TZ > /etc/timezone && \
  ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && \
  npm install -g npm && \
  npm install -g --force yarn && \
  npm install -g npm-check-updates && \
  usermod -l ${MY_USER} -d /home/${MY_USER} node && \
  groupmod -n ${MY_GROUP} node && \
  newgrp ${MY_GROUP} && \
  mkdir /node_modules && \
  usermod -d /home/${MY_USER} -m ${MY_USER} && \
  chown ${HOST_UID}:${HOST_GID} /node_modules

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN chown $HOST_UID:$HOST_GID -R ./

COPY --chown=$HOST_UID:$HOST_GID ./.yarnrc .
COPY --chown=$HOST_UID:$HOST_GID ./package.json .
COPY --chown=$HOST_UID:$HOST_GID ./yarn.lock .
COPY --chown=$HOST_UID:$HOST_GID ./public/ .

ENV PATH=/node_modules/.bin:$PATH

RUN if [ "${NODE_ENV}" = "production" ]; then \
  yarn install --production=true --frozen-lockfile --force ; \
  else \
  yarn install --production=false ; \
  fi
