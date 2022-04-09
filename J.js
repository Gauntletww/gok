const axios = require('axios');

const jsdom = require('jsdom');
var cloudscraper = require('cloudscraper');

var got=cloudscraper.get('https://manhwatop.com/');
got(axios);
const {JSDOM} = jsdom;



(async () => {
  

 const html = await axios.get('https://manhwatop.com/');
  
  
  


 


  
  

  

const dom = new JSDOM(html.data);


 
 

 console.log(dom);



 

   

 

})(); 
