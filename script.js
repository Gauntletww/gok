const request = require('request');

const options = {
  method: 'GET',
  url: 'https://manga-scraper-for-mangakakalot-website.p.rapidapi.com/search',
  qs: {keyword: 'memori', page: '1'},
  headers: {
    'X-RapidAPI-Host': 'manga-scraper-for-mangakakalot-website.p.rapidapi.com',
    'X-RapidAPI-Key': '6e1914be27msh216572bde6ff955p192e10jsn719f42181c08',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body.json());
});
