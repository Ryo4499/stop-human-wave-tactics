# 脱人海戦術

## 実行環境

```txt
Docker version 20.10.17, build 100c701 Rootless
Docker Compose version v2.10.0
```

## 起動方法

```bash
git clone git@github.com:Ryo4499/stop-human-wave-tactics.git
cd stop-human-wave-tactics
docker-compose build --no-cache
docker-compose up -d
# 停止
docker-compose down
```

## UPDATE手順

```bash
cd stop-human-wave-tactics
docker-compose down
docker-compose exec back sh
yarn upgrade-interactive
exit
docker-compose exec front sh
yarn upgrade-interactive
exit
```

## トラブルシューティング

1. .envの確認
2. dceでSWCの確認
3. docker volumeの削除
4. node_modules,yarn.lockを削除して再ビルド
5. DevDependency等の確認
