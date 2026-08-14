//data base ma initilize krvanu kam kre pachhd thi vadhu kaik data add krvo hoy to 

const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map( (obj) => ({ ...obj, owner: "69a06f0ccd2f1f3ddf05db5a"}) ); // badhi obj ma ower id set kri -- map fuction old array ma change na kre new array banavse and return krse
    await Listing.insertMany(initdata.data);  
    console.log("data was initilizes");
};

initDB();


