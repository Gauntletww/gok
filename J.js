const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://gaito.000webhostapp.com/test');

 const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelectorAll(".chapter-feed__container a div img")[0].src;

 
for(title) {

 
 

 console.log(title);

}

 

   

 

})(); 
