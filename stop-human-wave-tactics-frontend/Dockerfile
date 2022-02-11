FROM node:16-alpine

WORKDIR /home/stop-human-wave-tactics-frontend

COPY package.json .
COPY yarn.lock .

RUN apk update && yarn install --frozen-lockfile --ignore-optional && apk add tzdata

ENV TZ=Asia/Tokyo
