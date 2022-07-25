const fs = require('fs')

async function quotesanime() {
  return new Promise( async (resolve, reject) => {
  const data = fs.readFileSync('./data/quotesanime.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  console.log(randKey)
  const result = {
         quote: randKey.quote,
         character: randKey.character,
         anime: randKey.anime,
         episode: randKey.episode 
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
};

module.exports.quotesanime = quotesanime