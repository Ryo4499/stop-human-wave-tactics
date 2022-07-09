module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 25,
      amountLimit: 30,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
