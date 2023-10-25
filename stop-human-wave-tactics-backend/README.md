# 脱・人海戦術 バックエンド

## TSについて

version 4.2.3では動作することが確認できなかった。  
また、betaモデルでなければ正常に動作しない模様  

## ENVについて

```env
# ADMINのURL(http不要)
ADMIN_URL='/admin'
# ROOTのURL
URL='/'
# 以下キー名の通り
HOST
BACK_PORT
APP_KEYS
API_TOKEN_SALT
ADMIN_JWT_SECRET
JWT_SECRET
SENTRY_DSN
```

### PLUGINについて

ckeditorプラグインは下記の方法で追加

```sh
# clone plugin
git clone git@github.com:ckeditor/strapi-plugin-ckeditor.git src/plugins/strapi-plugin-ckeditor
# "workspaces": ["./src/plugins/strapi-plugin-ckeditor"]
vim src/plugins/strapi-plugin-ckeditor/package.json
```
