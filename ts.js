const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://www.asurascans.com/');

  
  
  

  
    

    





 const dom = new JSDOM(html.data);

        
                
                
console.log(dom);

        

})();
