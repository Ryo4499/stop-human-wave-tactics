FROM myoung34/github-runner:latest

ARG HOST_UID
ARG HOST_GID
ARG RUNNER_WORKDIR

USER root

RUN chown root:docker /usr/bin/docker && \
    chown -R ${HOST_UID}:${HOST_GID} /actions-runner && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R ${HOST_UID}:${HOST_UID} ${RUNNER_WORKDIR} /opt/hostedtoolcache

USER ${HOST_UID}:${HOST_GID}