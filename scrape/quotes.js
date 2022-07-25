const fs = require('fs')

async function quotes() {
  return new Promise( async (resolve, reject) => {
  const data = fs.readFileSync('./data/quotes.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  console.log(randKey)
  const result = {
         quote: randKey.quote,
         by: randKey.by
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
};

module.exports.quotes = quotes