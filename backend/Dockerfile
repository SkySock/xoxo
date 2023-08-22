FROM node:20-alpine

RUN apk add --no-cache netcat-openbsd

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install

COPY . .