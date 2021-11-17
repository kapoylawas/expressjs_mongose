const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    riview: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     riview: "Rasanya Manis"
// });

// apple.save(function(error){
//     if(error){
//         console.log(error);
//     }else {
//         console.log("berhasil simpan buah apple");
//     }
// })

const jagung = new Fruit({
    name: "jagung",
    rating: 7,
    riview: "Rasanya Manis"
});
const jeruk = new Fruit({
    name: "jeruk",
    rating: 6,
    riview: "Rasanya Manis"
});

Fruit.insertMany([jagung, jeruk],function(error){
        if(error){
            console.log(error);
        }else {
            mongoose.connection.close();

            console.log("berhasil simpan buah");
        }
})
