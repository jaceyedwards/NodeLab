//Part 2
const path = require("path");
const fs = require("fs");
//Used request-promise to retrieve articles from reddit
const request = require("request");

let redditPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let redditArray = [];

  //Extract from each article title, url, and author
  //Push each extracted article to an array

  JSON.parse(body).data.children.forEach(item => {
    redditArray.push({
      Title: item.data.title,
      URL: item.data.URL,
      Author: item.data.author
    });

    console.log(redditArray);

    fs.writeFile(redditPath, JSON.stringify(redditArray), err => {
      if (error) console.log(error);
    });
  });
});
