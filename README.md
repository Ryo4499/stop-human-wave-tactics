# stop-human-wave-tactics

## Usage

```sh
git clone git@github.com:Ryo4499/stop-human-wave-tactics.git
cd stop-human-wave-tactics
docker-compose build --no-cache
docker-compose up -d
docker-compose down
```

# Environment Variables

frontend environment variables

```env
# domain
DOMAIN=localhost
# time zone
TZ='Asia/Tokyo'
# language
LANG='en_US.UTF-8'
LANGUAGE='en_US.UTF-8'
LC_ALL='en_US.UTF-8'
# postgres
POSTGRES_HOST='db'
POSTGRES_PORT=5432
POSTGRES_DB='stop_human_wave_tactics_db'
POSTGRES_USER='ar44'
POSTGRES_PASSWORD=''
DB_SSL=false
# container user
MY_USER='node'
MY_GROUP='node'
# choice one DEV or PRODUCTION
MODE='DEV'
DOCKER_CONTENT_TRUST=1
NEXT_PUBLIC_BACKEND_URL=
NODE_EXTRA_CA_CERTS =
```

backend environment variables

```env
ADMIN_URL='/admin'
HOST='0.0.0.0'
BACK_PORT=1337
URL='/'
APP_KEYS=''
API_TOKEN_SALT=''
ADMIN_JWT_SECRET=''
JWT_SECRET=''
SENTRY_DNS=''
AWS_ACCESS_KEY_ID=
AWS_ACCESS_SECRET=
AWS_REGION=
S3_BUCKET_NAME=
```

## Gen SSL

```sh
# disable ssl server conf
mv nginx/conf.d/ssl_server.conf nginx/conf.d/ssl_server.conf.txt
# up
./build.up
# unlock packet filter 80,443
docker compose exec certbot sh
certbot certonly --webroot -w /usr/share/nginx/html --email $EMAIL -d $DOMAIN --agree-tos
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