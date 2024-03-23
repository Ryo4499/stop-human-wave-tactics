# stop-human-wave-tactics

## Usage

```sh
git clone git@github.com:x-o-o44dev/stop-human-wave-tactics.git
cd stop-human-wave-tactics
docker-compose build --no-cache
docker-compose up -d
docker-compose down
```

# Environment Variables

please refer to .env.sample

frontend environment variables

```env
PAGESIZE=6
FRONT_PORT=
NEXT_PUBLIC_PROXY_URL='http://localhost'
NEXT_PUBLIC_BACKEND_URL="http://back:${BACK_PORT}"
GTAG=''
```

backend environment variables

```env
# backend
ADMIN_URL='/admin'
HOST=''
BACK_PORT=
URL='/'
DATABASE_HOST='db'
DATABASE_PORT=$PG_PORT
DATABASE_CLIENT='postgres'
DATABASE_NAME=$POSTGRES_DB_FILE
DATABASE_USERNAME=$POSTGRES_USER_FILE
DATABASE_PASSWORD=$POSTGRES_PASSWORD_FILE
DATABASE_DRIVER='postgresql+asyncpg'
DATABASE_SSL=false
SENTRY_DSN=/run/secrets/SENTRY_DSN
APP_KEYS=/run/secrets/APP_KEYS
API_TOKEN_SALT=/run/secrets/API_TOKEN_SALT
ADMIN_JWT_SECRET=/run/secrets/ADMIN_JWT_SECRET
JWT_SECRET=/run/secrets/JWT_SECRET
TRANSFER_TOKEN_SALT=/run/secrets/TRANSFER_TOKEN_SALT
DEEPL_API_KEY=/run/secrets/DEEPL_API_KEY
```

## Generate SSL dev key

```sh
# disable ssl server conf
mv nginx/conf.d/ssl_server.conf nginx/conf.d/ssl_server.conf.txt
# up
./build.up
# unlock packet filter 80,443
docker compose exec certbot sh
certbot certonly --webroot -w /usr/share/nginx/html --email $EMAIL -d $DOMAIN --agree-tos
```

## How to switch dev

```sh
# Modify cert key paths
vim nginx/conf.d/default.conf
# Modify back, front port
vim nginx/nginx.conf
```

## How to update

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

```sh
# Host machine
# Add Port Forwarding settings(front, back, 80, 443)
vi ~/.ssh/config
# Remote machine
./build_up.sh
# Host machine
curl localhost:$BACK_PORT/admin
```
