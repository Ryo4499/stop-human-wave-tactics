FROM myoung34/github-runner:ubuntu-jammy

ARG MY_USER
ARG MY_GROUP
ARG HOST_UID
ARG HOST_GID
ARG DOCKER_GID
ARG RUNNER_WORKDIR

USER root

RUN groupmod -g ${DOCKER_GID} docker && \
    usermod -u ${HOST_UID} -o runner && \
    groupmod -g ${HOST_GID} -o runner && \
    chown root:docker /usr/bin/docker && \
    chown runner:docker /usr/bin/docker && \
    chown -R runner:runner /actions-runner && \
    chown -R runner:runner /home/runner && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R runner:runner ${RUNNER_WORKDIR} /opt/hostedtoolcache

USER ${MY_USER}

WORKDIR /actions-runner