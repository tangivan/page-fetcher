const request = require('request');
const fs = require('fs');

let args = process.argv;
args = args.slice(2);
console.log(args);
let exists = false;

request(args[0], (error, response, body) => {
  fs.stat(args[1], (err, stat) => {
    if (err == null) {
      console.log("File already exists!");
    } else {
      fs.writeFile(args[1], body, err => {
        if (err) {
          console.error(err);
          return
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
      })
    }
  })
});