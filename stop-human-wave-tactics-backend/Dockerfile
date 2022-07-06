FROM node:18-alpine

ARG UID
ARG GID
ARG USER
ARG GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata && yes | addgroup -g $GID $GROUP && yes | adduser -u $UID -G $GROUP $USER 

WORKDIR "/home/${USER}/stop-human-wave-tactics-backend"

COPY package.json .
COPY yarn.lock .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
		yarn install --production=true --frozen-lockfile --force --update-checksums && chown -R $USER:$GROUP ./; \
	else \
		yarn install --production=false --no-lockfile --pre-lockfile && chown -R $USER:$GROUP ./; \
	fi

USER $USER

