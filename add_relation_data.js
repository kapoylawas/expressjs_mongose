const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data tidak ada'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    } ,
    riview: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data tidak ada'],
    },
    age: {
        type: Number,
    },
    favoriteFruit: fruitSchema,
});
const People = mongoose.model("People", peopleSchema);


const FruitDuku = new Fruit({
    name: "Duku",
    rating: 8,
    riview: "Rasanya Manis"
});

FruitDuku.save(function(error){
    if(error){
        console.log(error);
    }else {
        console.log("berhasil simpan buah duku");
    }
})

const people = new People({
    name: "Sangga",
    age: 24,
    favoriteFruit: FruitDuku
})

people.save(function(error){
    if(error){
        console.log(error);
    }else {
        console.log("berhasil simpan people relation ke buah");
    }
})