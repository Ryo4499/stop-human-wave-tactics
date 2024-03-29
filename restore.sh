#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT

# Need to gunzip backup file 
if [ -e $1 ]; then
    file=$(basename $1)
    docker compose cp $1 db:/tmp;
    args="psql -U $(cat .secrets/DB_USER) -d $(cat .secrets/DB_NAME) < /tmp/$file";
    echo $args
	docker compose exec db sh -c "$args";
fi
