const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://beemanga.net/genre/manhwa/');

 const dom = new JSDOM(html.data);

 

 console.log(dom);



})(); 
