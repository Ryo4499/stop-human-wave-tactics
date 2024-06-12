FROM myoung34/github-runner:latest

ARG HOST_UID
ARG HOST_GID
ARG MY_USER
ARG MY_GROUP
ARG RUNNER_WORKDIR

USER root

RUN chown root:docker /usr/bin/docker && \
    groupadd -g ${HOST_GID} ${MY_GROUP} && \
    useradd -m -u ${HOST_UID} -g ${HOST_GID} ${MY_USER} && \
    usermod -aG docker ${MY_USER} && \
    chown ${MY_USER}:docker /usr/bin/docker && \
    chown -R ${MY_USER}:${MY_GROUP} /actions-runner && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R ${MY_USER}:${MY_GROUP} ${RUNNER_WORKDIR} /opt/hostedtoolcache

USER $MY_USER