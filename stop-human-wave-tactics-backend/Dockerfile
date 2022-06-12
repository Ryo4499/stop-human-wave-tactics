FROM node:16-alpine

WORKDIR /home/stop-human-wave-tactics-backend

COPY package.json .
COPY yarn.lock .

RUN apk update && apk add libressl-dev libffi-dev tzdata && yarn global add yarn && yarn install --frozen-lockfile --ignore-optional

ENV TZ=Asia/Tokyo
