const fs = require("fs");

module.exports = function create(data, filePath) {
  return new Promise( function(resolve, reject) {
    if(!filePath) filePath = "./defaultFile.json";
    fs.appendFile(filePath, data, (err)=> {
      if(err) reject(err);
      console.log("appended file");
      resolve(true);
    });
  });
}
