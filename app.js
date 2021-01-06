const Maindb = require('./maindb');
const db = new Maindb();


(async function(){
    await db.create("users");
    db.use("users","./datastore");
    await db.insert("Saurabh",{age: 20});
    console.log(await db.read("Saurabh"));
    db.delete("Saurabh");
})();
