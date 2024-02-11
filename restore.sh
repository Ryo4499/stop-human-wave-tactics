#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT
# Need to gunzip backup file 
if [ -e $1 ]; then
	docker compose exec -it db psql -U $(cat .secrets/DB_USER) -d $(cat .secrets/DB_NAME) < $1;
fi
