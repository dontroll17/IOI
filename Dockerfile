# syntax=docker/dockerfile:1

FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start:dev"]