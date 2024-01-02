# Dockerfile for API folder
FROM node:14-alpine

RUN apk add --no-cache --update python3 make g++

RUN ln -s $(which python3) /usr/local/bin/python

WORKDIR /api

COPY . .

RUN npm ci

EXPOSE $BACKEND_PORT

CMD ["npm", "start"]
