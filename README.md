# stop-human-wave-tactics

## Usage

```bash
git clone git@github.com:Ryo4499/stop-human-wave-tactics.git
cd stop-human-wave-tactics
docker-compose build --no-cache
docker-compose up -d
# 停止
docker-compose down
```

# Environment Variables

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
GLOBAL_AGENT_HTTP_PROXY=
GLOBAL_AGENT_HTTPS_PROXY=
NEXT_PUBLIC_BACKEND_URL=
NODE_EXTRA_CA_CERTS =
```

backend environment variables

```env
ADMIN_URL='/admin'
HOST='0.0.0.0'
PORT=1337
URL='/'
APP_KEYS='InIr1rumou3VICQGuHY2Mw==,re61HU1Sza6OZ9unpHmeVg==,RrwHKBIp9PrYsgzIqPkHVw==,nRSuKmQEYegTaIl9BJ6mYA=='
API_TOKEN_SALT='7gO40OUhDqnkYsyfD1ng4Q=='
ADMIN_JWT_SECRET='tJRHNa1PVZMtYKOQIU5uMA=='
JWT_SECRET='dvMKofqeSiqmv2qWDkIp2w=='
SENTRY_DNS='8.8.8.8'
AWS_ACCESS_KEY_ID=
AWS_ACCESS_SECRET=
AWS_REGION=
S3_BUCKET_NAME=stop-human-wave-tactics-bucket
```

## How to update

```bash
cd stop-human-wave-tactics
docker-compose down
docker-compose exec back sh
yarn upgrade-interactive
exit
docker-compose exec front sh
yarn upgrade-interactive
exit
```
