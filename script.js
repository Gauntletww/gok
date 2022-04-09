const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://mangadex.org/titles/latest');

 const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelectorAll(".chapter-feed__container .chapter-feed__cover");
 const img=dom.window.document.querySelectorAll(".chapter-feed__container a div img");
for(
 var i=0;i<dom.window.document.getElementsByClassName("chapter-feed__container").length;i++){
 
 console.log(title[i].title);
}
 
   
 

})();
