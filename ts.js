const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://beemanga.net/latest-update/');

  
  
  

  
    

    



}); 

 const dom = new JSDOM(html.data);

        
                
                var de=dom.window.document.querySelectorAll(".thumb img")[3].src;
document.getElementById("testing").src=de;
                

        

})();
