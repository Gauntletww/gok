const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://gaito.000webhostapp.com/test');

 const dom = new JSDOM(html.data);

 const title = dom.window.document.getElementsByTagName("h1");

 
for(title) {

 
 

 console.log(title);

}

 

   

 

})(); 
