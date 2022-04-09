const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://mangadex.org/titles/latest');

 const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelectorAll(".chapter-feed__container a div img")[0].src;

 
if(title) {

 
 

 console.log(title);

}

 

   

 

})(); 
