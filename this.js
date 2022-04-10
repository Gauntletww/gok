const axios = require('axios');

const jsdom = require('jsdom');

const {JSDOM} = jsdom;

(async () => {

 const html = await axios.get('https://beemanga.net/latest-update/');

 const dom = new JSDOM(html.data);

        for(var i=0;i<dom.window.document.getElementsByClassName("status").length;i++){

                var cd=dom.window.document.querySelectorAll(".name a")[i].innerHTML;

                var de=dom.window.document.querySelectorAll(".thumb img")[i].src;

                console.log(cd + de )

        }

})();
