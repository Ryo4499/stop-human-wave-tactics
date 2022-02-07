FROM node:16-alpine

WORKDIR /home/stop-human-wave-tactics-backend

COPY package.json .
COPY yarn.lock .

RUN apk update && yarn install --frozen-lockfile --ignore-optional

CMD ["yarn","develop"]
