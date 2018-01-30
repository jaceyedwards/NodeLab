//Part 1
//Import (require) path and fs
const path = require("path");
const fs = require("fs");
let chirpPath = path.join(__dirname, "../chirp.json");

//Create and array consisting of at least 5 chirp objects
let chirpArray = [
  {
    name: "Jacey",
    chirp: "I am in the middle of coding!"
  },
  {
    name: "Abbie",
    chirp: "It's beautiful outside!"
  },
  {
    name: "Hannah",
    chirp: "Who wants to go to the Phish concert tonight?"
  },
  {
    name: "Caroline",
    chirp: "Anyone want to grab happy hour?"
  },
  {
    name: "Rosie",
    chirp: "I love going to the beach!"
  }
];

//write the array to a file in the root of the project called chirps.json
fs.writeFile(chirpPath, JSON.stringify(chirpArray), err => {
  if (err) console.log(err);
});

//Add code to server.js that reads the file and outputs the chirps to the console
fs.readFile(chirpPath, function read(err, data) {
  if (err) console.log(err);

  let object = JSON.parse(data);
  object.forEach(item => {
    console.log(`${item.name} chirped ${item.chirp}`);
  });
});
