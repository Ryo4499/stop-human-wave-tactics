FROM myoung34/github-runner:latest

ARG DOCKER_GID
ARG RUNNER_WORKDIR

USER root

RUN groupmod -g ${DOCKER_GID} docker && \
    chown root:docker /usr/bin/docker && \
    chown runner:docker /usr/bin/docker && \
    chown -R runner:runner /actions-runner && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R runner:runner ${RUNNER_WORKDIR} /opt/hostedtoolcache

USER runner