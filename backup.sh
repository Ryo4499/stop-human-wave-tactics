#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT
BACKUP_DIR='./backup'
today=$(date "+%Y%m%d")
mkdir -p $BACKUP_DIR
docker compose exec -it db pg_dump -U $(cat .secrets/DB_USER) $(cat .secrets/DB_NAME) | gzip > "${BACKUP_DIR}/${today}_db_bk.gz"
