FROM myoung34/github-runner:ubuntu-jammy as base

ARG HOST_UID
ARG HOST_GID
ARG DOCKER_GID
ARG RUNNER_WORKDIR

ENV RUN_AS_ROOT false

USER root

RUN groupmod -g ${DOCKER_GID} docker && \
    usermod -u ${HOST_UID} -o runner && \
    groupmod -g ${HOST_GID} -o runner && \
    chown root:docker /usr/bin/docker && \
    chown runner:docker /usr/bin/docker && \
    mkdir -p ${RUNNER_WORKDIR} && \
    chown -R runner:runner /actions-runner /home/runner ${RUNNER_WORKDIR} /opt/hostedtoolcache /_work && \
    chown runner:runner /entrypoint.sh /token.sh /app_token.sh

USER runner
WORKDIR /actions-runner
ENTRYPOINT ["/entrypoint.sh"]
CMD ["./bin/Runner.Listener","run","--startuptype","service"]