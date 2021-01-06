const x = require("./readData");
const create = require("./create");

x("anubhav")
  .then((data)=> {
    console.log(data);
  })
  .catch((err)=> {
    console.log(err);
  })

const data = JSON.stringify({
  manik: {
    name: "manik",
    age: 34
  },
  rishabh:{
    name: "rishabh",
    age: 23
  }
});

create(data, "mydata.json")
  .then(()=> {
    console.log('completed');
  })
  .catch((err)=> {
    console.log(err)
  })
