FROM nginx:stable-alpine
#FROM owasp/modsecurity-crs:3.3-nginx-alpine-202304160904
RUN apk update && apk add libressl-dev libffi-dev tzdata
RUN nginx -t