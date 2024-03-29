FROM postgres:14-alpine

COPY ./pg_hba.conf /var/lib/postgresql/pg_hba.conf
COPY ./postgresql.conf /var/lib/postgresql/postgresql.conf
COPY ./server.crt /var/lib/postgresql/server.crt
COPY ./server.key /var/lib/postgresql/server.key