# 脱人海戦術

## 起動方法

```bash
git clone git@github.com:Ryo4499/stop-human-wave-tactics.git
cd stop-human-wave-tactics
docker-compose build --no-cache
docker-compose up -d
# 停止
docker-compose down
```

## トラブルシューティング

1. .envの確認
2. dceでSWCの確認
3. docker volumeの削除
4. node_modules,yarn.lockを削除して再ビルド
5. DevDependency等の確認

