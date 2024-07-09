FROM myoung34/github-runner:latest

ARG MY_USER
ARG MY_GROUP
ARG HOST_UID
ARG HOST_GID
ARG DOCKER_GID
ARG RUNNER_WORKDIR

USER root

RUN groupmod -g ${DOCKER_GID} docker && \
    usermod -u ${HOST_UID} -l ${MY_USER} -d /home/${MY_USER} runner && \
    groupmod -g ${HOST_GID} -n ${MY_GROUP} runner && \
    chown root:docker /usr/bin/docker && \
    chown ${MY_USER}:docker /usr/bin/docker && \
    chown -R ${MY_USER}:${MY_GROUP} /actions-runner && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R ${MY_USER}:${MY_GROUP} ${RUNNER_WORKDIR} /opt/hostedtoolcache

USER runner