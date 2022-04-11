const headers = new Headers()

headers.append("Content-Type", "application/json")

const body = {

  "test": "event"

}

const options = {

  method: "POST",

  headers,

  mode: "cors",

  body: JSON.stringify(body),

}

const response = fetch("https://eovvxm4zx4f20bj.m.pipedream.net", options);
const get2= response.json();
console.log(get2);
