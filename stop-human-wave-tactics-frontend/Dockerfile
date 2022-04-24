FROM node:16-alpine

WORKDIR /home/stop-human-wave-tactics-frontend

COPY package.json .
COPY yarn.lock .

RUN apk update && yarn install --frozen-lockfile --ignore-optional && yarn add next@latest @mui/material @emotion/react @emotion/styled @mui/icons-material @emotion/server && apk add tzdata
