FROM node:16-alpine

WORKDIR /home/stop-human-wave-tactics-backend

COPY package.json .
COPY yarn.lock .

RUN apk update && yarn install --frozen-lockfile --ignore-optional && apk add tzdata

ENV TZ=Asia/Tokyo

CMD ["yarn","develop"]
