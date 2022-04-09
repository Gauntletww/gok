var webdriver = require ('selenium-webdriver'),

  By = webdriver.By;

var driver = new webdriver.Builder()

  .forBrowser('chrome')

  .build();



var query = driver.get("https://www.smartproxy.com/");
console.log(query);
