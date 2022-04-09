const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://mangadex.org/titles/latest');

const resourceLoader = new jsdom.ResourceLoader({

  proxy: "http://127.0.0.1:9001",

  strictSSL: false,

  userAgent: "Mellblomenator/9000",

});

const dom = new JSDOM(``, { resources: resourceLoader });

 const title = dom.window.document.querySelectorAll(".chapter-feed__container a div img")[0].src;

 
if(title) {

 
 

 console.log(title);

}

 

   

 

})(); 
