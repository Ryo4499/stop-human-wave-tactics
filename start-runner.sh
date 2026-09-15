#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
source $CURRENT/.env
docker build -t runner \
    --build-arg HOST_UID=${HOST_UID} \
    --build-arg HOST_GID=${HOST_GID} \
    --build-arg DOCKER_GID=${DOCKER_GID} \
    --build-arg RUNNER_WORKDIR=${RUNNER_WORKDIR} \
    ./runner
docker run --name runner -u runner --env-file .env -itd -v /var/run/docker.sock:/var/run/docker.sock -v runnerData:/tmp/runner runner
