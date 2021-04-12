const postmanrequest = require("postman-request");
const request = require("request");
const axios = require("axios");

const axiosFetch = async () => {
  const { data } = await axios.get("https://www.tronalddump.io/random/quote");
  console.log(data.value);
};

request({ url: "https://www.tronalddump.io/random/quote", json: true }, (err, res, body) => console.log(body.value));
postmanrequest({ url: "https://www.tronalddump.io/random/quote", json: true }, (err, res, body) => console.log(body.value));

axiosFetch();
