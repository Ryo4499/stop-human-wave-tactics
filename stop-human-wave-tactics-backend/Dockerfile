FROM node:18-alpine

ARG UID
ARG GID
ARG MY_USER
ARG MY_GROUP
ARG NODE_ENV

# measures Webpack Memory leak
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN apk update && \
  apk add shadow libressl-dev libffi-dev tzdata && \
  npm install -g npm && \
  npm install -g --force yarn && \
  npm install -g npm-check-updates && \
  usermod -l ${MY_USER} node && \
  groupmod -n ${MY_GROUP} node && \
  mkdir /node_modules && \
  usermod -d /home/${MY_USER} -m ${MY_USER} && \
  chown ${UID}:${GID} /node_modules

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN chown $UID:$GID -R ./

# PROD & rm bind mount
# COPY --chown=$MY_USER:$MY_GROUP . .
COPY --chown=$UID:$GID ./.yarnrc .
COPY --chown=$UID:$GID ./package.json .
COPY --chown=$UID:$GID ./yarn.lock .
COPY --chown=$UID:$GID ./public/ .

ENV PATH=/node_modules/.bin:$PATH

RUN if [ "${NODE_ENV}" = "production" ]; then \
  yarn install --production=true --frozen-lockfile --force ; \
  else \
  yarn install --production=false ; \
  fi
