#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT

# Specify the file to restore
if [ -e $1 ]; then
    if [[ ${1##*.} = 'gz' ]]; then
        gunzip $1
    fi
    file=$(basename $1)
    file=${file%.*}
    docker compose cp $file db:/tmp;
    args="psql -U $(cat .secrets/DB_USER) -d $(cat .secrets/DB_NAME) < /tmp/$file";
    echo $args
    docker compose exec db sh -c "$args";
fi
