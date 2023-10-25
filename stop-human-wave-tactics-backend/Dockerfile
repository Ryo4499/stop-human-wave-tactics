FROM node:18-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

# measures Webpack Memory leak
ENV NODE_OPTIONS="--max-old-space-size=1024"
RUN apk update && apk add libressl-dev libffi-dev tzdata && npm install -g npm && npm install -g --force yarn && npm install -g npm-check-updates

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN chown $MY_USER:$MY_GROUP ./
# PROD & rm bind mount
COPY --chown=$MY_USER:$MY_GROUP . .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force ; \
  else \
  yarn install --production=false ; \
  fi

