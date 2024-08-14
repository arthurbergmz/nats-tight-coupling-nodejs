# NATS test

- with tight coupling micro services (Project A depends on Project B, that depends of Project A to answer Project A)

## Project A routes

```
GET http://localhost:3000/alpha
GET http://localhost:3000/beta
```

`/alpha` depends on Project B's `/charlie`

`/alpha` must answer `{ "result": 6 }` (ALPHA const 1 + /charlie response 5)
`/beta` must answer `{ "result": 2 }` (BETA const 2)

## Project B routes

```
GET http://localhost:3001/charlie
```

`/charlie` depends on Project A's `/beta`

`/charlie` must answer `{ "result": 5 }` (CHARLIE const 3 + /beta response 2)

## Command reference

```sh
docker-compose up -d --build
```

or if you already have a NATS server running at localhost, you can also run individually:

```sh
npm run dev-a
npm run dev-b
```
