const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://mangadex.org/titles/latest');

 const dom = new JSDOM(html.data);

 

 console.log(dom);



})(); 
