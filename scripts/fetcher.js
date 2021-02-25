
const RSS_URL = "https://www.dr.dk/nyheder/service/feeds/udland";

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))