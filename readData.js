const fs = require('fs');

module.exports = function readData(key) {
  return new Promise(function(resolve, reject) {
    fs.readFile("./mydata.json", {
      encoding: "utf-8"
    }, function(err, data){
      if(err) reject(err);
      const completeData = JSON.parse(data);
      resolve(completeData[key]);
    });
  })
}
