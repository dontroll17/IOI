## Description

this is mo`s server for testing 
with mongo and redis in docker

for some reason on windows run redis in one docker container problem
on linux no problem, but that's why redis is not included in compose

## Installation

first of all rename .env.example to .env

with docker:
```bash
$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

 $ docker-compose up -d
```

without docker:
```bash
$ npm ci
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```