#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
cd $CURRENT

mkdir -p log
LOG_FILE="log/cert-renewal.log"
CURRENT_DATE=$(date '+%Y-%m-%d %H:%M:%S')

docker compose up certbot -d
DRYRUN_OUTPUT=$(docker compose exec -T certbot certbot renew --dry-run 2>&1)
echo "[$CURRENT_DATE] Dry-run output: $DRYRUN_OUTPUT" >> "$LOG_FILE"

# 更新が必要かチェック
if echo "$DRYRUN_OUTPUT" | grep -q "The following certificates would have been renewed:"; then
    echo "[$CURRENT_DATE] Renewal needed, proceeding with actual renewal" >> "$LOG_FILE"
    
    # 実際の更新を実行
    RENEWAL_OUTPUT=$(docker compose exec -T certbot certbot renew 2>&1)
    echo "[$CURRENT_DATE] Renewal output: $RENEWAL_OUTPUT" >> "$LOG_FILE"
    
    # 更新が成功したかチェック
    if echo "$RENEWAL_OUTPUT" | grep -q "Congratulations, all renewals succeeded."; then
        docker compose exec nginx nginx -s reload
        echo "[$CURRENT_DATE] Certificates renewed and Nginx reloaded successfully" >> "$LOG_FILE"
    else
        echo "[$CURRENT_DATE] ERROR: Certificate renewal failed" >> "$LOG_FILE"
    fi
else
    echo "[$CURRENT_DATE] No renewal needed at this time" >> "$LOG_FILE"
fi

docker compose rm -fs certbot
