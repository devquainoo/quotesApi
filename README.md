# Quote Api - Get Technological Quotes

## Documentation
* `GET` `/api/quotes/random` get a random quote
* `GET` `/api/quotes` get all quotes or filtered by `person` query .
* `POST` `/api/quotes` create new quotes providing `person` and `quote` query.
* `PUT` `/api/quotes/:id` Update quotes by `id` and specify data by `person` and `quote` query.
* `DELETE` `/api/quotes/:id` delete quotes by `id`.

## Setup app
- Install `node js`.
- `npm install express`
- `npm install morgan`
- `Node server.js` to run app