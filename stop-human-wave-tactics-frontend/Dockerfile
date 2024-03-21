FROM node:18-alpine

ARG UID
ARG GID
ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add shadow libressl-dev libffi-dev tzdata wget curl && npm install -g npm && npm install -g --force yarn && npm install -g npm-check-updates && mkdir /node_modules && usermod -l ${MY_USER} node && groupmod -n ${MY_GROUP} node && usermod -d /home/${MY_USER} -m ${MY_USER} && chown ${UID}:${GID} /node_modules 

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

RUN chown $UID:$GID -R ./ 

#COPY --chown=$MY_USER:$MY_GROUP . .
COPY --chown=$UID:$GID ./.yarnrc .
COPY --chown=$UID:$GID ./package.json .
COPY --chown=$UID:$GID ./yarn.lock .
COPY --chown=$UID:$GID ./public/ ./

ENV PATH=/node_modules/.bin:$PATH

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
    yarn install --frozen-lockfile --force ; \
    else \
    yarn install ; \
    fi

