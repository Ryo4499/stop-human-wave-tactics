# Stop Human Wave Tactics

## Usage

execute the following command

```sh
git clone git@github.com:x-o-o44dev/stop-human-wave-tactics.git
cd stop-human-wave-tactics
mkdir .secrets
# create .secrets
vi .secrets/*
cp .env.sample .env
# modify .env
vi .env
./build_up.sh
```

## About environment variables

please refer to .env.sample

frontend environment variables

```env
# frontend
PAGESIZE=6
FRONT_PORT=
GOOGLE_ADSENSE_ENABLED=false
FRONT_SENTRY_DSN=/run/secrets/FRONT_SENTRY_DSN
NEXT_PUBLIC_DOMAIN="${DOMAIN}"
NEXT_PUBLIC_BACKEND_URL="http://back:${BACK_PORT}"
NEXT_PUBLIC_GAN_ID=
# Google Adsense
NEXT_PUBLIC_GAD_ID=
# Tag Manager
NEXT_PUBLIC_GTM_ID=
```

monitoring environment variables

```env
# grafana
GF_SECURITY_ADMIN_USER=
GF_SECURITY_ADMIN_PASSWORD=
GF_USERS_ALLOW_SIGN_UP=false

# k6
INFLUXDB_DB=k6
K6_OUT='influxdb=http://influxdb:8086/k6'
```

backend environment variables

```env
# backend
ADMIN_URL='/admin'
HOST=''
BACK_PORT=
URL=''
DATABASE_HOST='db'
DATABASE_PORT=$PG_PORT
DATABASE_CLIENT='postgres'
DATABASE_NAME=$POSTGRES_DB_FILE
DATABASE_USERNAME=$POSTGRES_USER_FILE
DATABASE_PASSWORD=$POSTGRES_PASSWORD_FILE
DATABASE_DRIVER='postgresql+asyncpg'
DATABASE_SSL=false
BACK_SENTRY_DSN=/run/secrets/BACK_SENTRY_DSN
APP_KEYS=/run/secrets/APP_KEYS
API_TOKEN_SALT=/run/secrets/API_TOKEN_SALT
ADMIN_JWT_SECRET=/run/secrets/ADMIN_JWT_SECRET
JWT_SECRET=/run/secrets/JWT_SECRET
TRANSFER_TOKEN_SALT=/run/secrets/TRANSFER_TOKEN_SALT
DEEPL_KEY=/run/secrets/DEEPL_KEY
```

## Generate SSL key

If you want to use SSL, execute the following command

```sh
# disable ssl server conf
mv nginx/conf.d/default.conf nginx/conf.d/default.conf.tmp
mv nginx/conf.d/default.conf.txt nginx/conf.d/default.conf
# up
docker compose up -d proxy certbot
# unlock packet filter 80,443
./create-cert.sh
```

if not exist localhost.crt, localhost.key

```sh
./certbot/config/create-dev-key.sh
```

## How to switch dev

When you want to switch to dev, execute the following command

```sh
# Modify cert key paths
vim nginx/conf.d/default.conf
# Modify back, front port
vim nginx/nginx.conf
```

## How to update

When you want to update, execute the following command

```sh
cd stop-human-wave-tactics
docker-compose down
docker-compose exec back sh
ncu -u
exit
docker-compose exec front sh
ncu -u
exit
./copy_package.sh
```

## How to access administrator panel

If you want to access the administrator panel, execute the following command

```sh
# Host machine
# Add Port Forwarding settings(front, back, 80, 443)
vi ~/.ssh/config
# Remote machine
./build_up.sh
# Host machine
curl localhost:$BACK_PORT/admin
```

## Modify db tables

When you want to modify db tables, execute the following command

```sh
docker-compose exec back sh
yarn dev
# access graphql playground
# download schema.graphql sdl
graphql-codegen
```
