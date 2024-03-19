FROM node:18-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

# measures Webpack Memory leak
ENV NODE_OPTIONS="--max-old-space-size=1024"
RUN apk update && apk add shadow libressl-dev libffi-dev tzdata && npm install -g npm && npm install -g --force yarn && npm install -g npm-check-updates && usermod -l ${MY_USER} node && groupmod -n ${MY_GROUP} node && mkdir /node_modules && usermod -d /home/${MY_USER} -m ${MY_USER} && chown ${MY_USER}:${MY_GROUP} /node_modules

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN chown $MY_USER:$MY_GROUP -R ./ && mkdir -p ./public/uploads

# PROD & rm bind mount
# COPY --chown=$MY_USER:$MY_GROUP . .
COPY --chown=$MY_USER:$MY_GROUP ./package.json .
COPY --chown=$MY_USER:$MY_GROUP ./yarn.lock .

ENV PATH=/node_modules/.bin:$PATH

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
    yarn install --production=true --frozen-lockfile --force --modules-folder=/node_modules ; \
    else \
    yarn install --production=false --modules-folder=/node_modules ; \
    fi

