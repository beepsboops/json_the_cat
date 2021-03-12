const request = require('./node_modules/request');

const args = process.argv.slice(2);

const catSearch = function(searchTerm) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`;
  request(url, function(error, response, body) {
    if (error) {
      console.log(error, response);
    } else {
      if (body.length < 4) {
        console.log("Not a cat");
      } else {
        const data = JSON.parse(body);
        console.log(data[0].description);
      }
    }
  });
};

catSearch(args);