# 脱・人海戦術 フロントエンド

## GraphQLの型宣言の自動生成

1. スキーマを定義してgraphql以下に.graphqlと.ts配置
2. playgroundからSDLダウンロードして./に配置
3. 以下のコマンド実行(./types/apollo_client.ts に型宣言が出力される)

```bash
yarn run graphql-codegen
```

