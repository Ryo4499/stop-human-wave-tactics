#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT

openssl genrsa 2048 > $CURRENT/server.key
openssl req -new -newkey rsa:2048 -sha256 -nodes -keyout server.key -subj "/CN=\/emailAddress=/C=JP/ST=Tokyo/L=/O=/OU=" -out server.csr
openssl x509 -days 36500 -req -signkey $CURRENT/server.key < $CURRENT/server.csr > $CURRENT/server.crt 
chmod 0600 $CURRENT/server.key $CURRENT/server.crt $CURRENT/server.csr