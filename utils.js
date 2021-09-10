const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuoteIndexById = (id, quotes) => {
  let index;
  if (Array.isArray(quotes))
  {
      index = quotes.findIndex((quote) => {
        return quote.id === id;
    });
    return index;   
  }
  return index;
}
// update quote by id, return quote if successful and -1 if fails
const updateQuoteById = (id, quotes, data) => {
  let index = getQuoteIndexById(id, quotes);
  if (index < 0){
    return -1;
  }
  data['id'] = id
  let quote = data;
  quotes[index] = quote;
  return quote;
}

module.exports = {
  getRandomElement,
  updateQuoteById,
  getQuoteIndexById
};
