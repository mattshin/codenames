# Codenames Server

## Quickstart

```
$ npm ci --production
$ npm start
```

Thats it! This will start up an Express server on port 3001 of localhost.

The api listens for the route `/api/` and tries to service the request.

## Development

Make sure you have `node >= 8` and `npm >= 6`, and then:

```
$ npm install
```

to get started locally.

The backend "store" is extremely primitive: it's just a single JSON file called `currentGame.json`.
Eventually this will be replaced with a MongoDB instance that allows the server to track multiple games at
a time, but for right now, this means that only one game can be played at a time.

## API Reference

There are only 2 things that this Server does: return the current game, and generate new games.

### GET `api/boardState`

Returns the board as a JSON object. The board is represented as a list of 25 words, each of which has a color.
The actual hex value should be managed by the client, but I was young and ignorant when I first built this (PRs welcome :P).

### GET `api/newGame`

Exactly the same as `boardState`, but generates a new board beforehand.