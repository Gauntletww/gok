const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;


(async () => {
const window = (new JSDOM(``, { pretendToBeVisual: true })).window;

window.requestAnimationFrame(timestamp => {

  console.log(timestamp > 0);

});
 const html = await axios.get('https://manhwatop.com/');
  
  
  


 


  
  

  


const dom = new JSDOM(html.data);


 
 

 console.log(data);



 

   

 

})(); 
