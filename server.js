const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, updateQuoteById, getQuoteIndexById } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

app.get('/api/quotes/random', (req, res) => {
  let quote = getRandomElement(quotes);
  res.json({quote});
});

app.get('/api/quotes', (req, res) => {
    let AllQuotes = quotes;
    if ((Object.keys(req.query).length > 0) && req.query.hasOwnProperty('person')) {
        AllQuotes = quotes.filter((quoteObject) => {
            return quoteObject.person.toLowerCase() === req.query['person'].toLowerCase(); 
        });
    }
    res.send({'quotes': AllQuotes});
});

app.post('/api/quotes', (req, res) => {
  let quote = req.query;
  if (quote.hasOwnProperty('quote') && quote.hasOwnProperty('person')){
    quotes.push(quote);
    res.json({quote});
  } 
  else
  {
    res.status(400).send();
  }
});

app.put('/api/quotes/:id', (req, res) => {
  let id = parseInt(req.params.id)
  let index = getQuoteIndexById(id, quotes);
  if (req.query.hasOwnProperty('person') && req.query.hasOwnProperty('quote') && index > -1)
  {
    let quote = updateQuoteById(id, quotes, req.query);
    res.json({quote});
  }
  else
  {
    res.status(404).send("Resource Not Found");
  }
});

app.delete('/api/quotes/:id', (req, res) => {
  let index = getQuoteIndexById(parseInt(req.params.id), quotes);
  if (index >= 0)
  {
    quotes.splice(index,1);
    res.status(204).send();
  }
  else{
    res.status(404).send('Failed Operation Resource not existing');
  }
});