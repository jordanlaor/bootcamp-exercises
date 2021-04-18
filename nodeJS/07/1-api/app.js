const https = require("https");
const http = require("http");
const postmanrequest = require("postman-request");
const request = require("request");
const axios = require("axios");

const axiosFetch = async () => {
  const { data } = await axios.get("https://www.tronalddump.io/random/quote");
  console.log(data.value);
};

request({ url: "https://www.tronalddump.io/random/quote", json: true }, (err, res, body) => console.log(body.value));
postmanrequest({ url: "https://www.tronalddump.io/random/quote", json: true }, (err, res, body) => console.log(body.value));

https.get("https://api.chucknorris.io/jokes/random", (res) => {
  let body = "";
  res.on("data", (data) => (body += data));
  res.on("end", () => console.log(JSON.parse(body.toString()).value));
});

axiosFetch();
