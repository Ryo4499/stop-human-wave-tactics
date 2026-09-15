FROM node:20-alpine
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 120000
COPY --chown=node:node . .
RUN mkdir -p dist && chown node:node dist
EXPOSE 3000
USER node
CMD ["node", "node_modules/next/dist/bin/next", "dev", "--hostname", "0.0.0.0", "--port", "3000"]
