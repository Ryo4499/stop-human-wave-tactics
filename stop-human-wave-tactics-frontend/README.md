# 脱・人海戦術 フロントエンド

## GraphQLの型宣言の自動生成

graphqlフォルダ以下に使用するQuery,Mutationを定義し、codegen.ymlにgraphqlフォルダのパス、型宣言の出力先、  
graphql playgroundからダウンロードしたSDLのスキーマのパスを指定して下記のコマンドを実行

```bash
yarn run graphql-codegen
```
