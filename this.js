const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://beemanga.net/latest-update/', {

  
  
  

  proxy: {

    host: 'localhost',

    port: 3000

  }

}); 

 const dom = new JSDOM(html.data);

        
                var cd=dom.window.document.querySelectorAll(".name a")[i].innerHTML;

                var de=dom.window.document.querySelectorAll(".thumb img")[i].src;
document.getElementById("testing").src=de;
                

        

})();
