const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;


(async () => {
const window = (new JSDOM(``, { pretendToBeVisual: true })).window;

window.requestAnimationFrame(timestamp => {

  console.log(timestamp > 0);

});
 const html = await axios.get('https://mangadex.org/titles/latest');

  
  
  


 


  
  

  


const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelectorAll(".chapter-feed__container a div img")[0].src;

 
if(title) {

 
 

 console.log(title);

}

 

   

 

})(); 
