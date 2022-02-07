FROM node:16

WORKDIR /home/stop-human-wave-tactics-frontend

COPY package.json .
COPY yarn.lock .

RUN apt update -y && yarn install --frozen-lockfile --ignore-optional

CMD ["yarn","dev"]

