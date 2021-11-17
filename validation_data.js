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

const mangga = new Fruit({
    name: "mangga",
    rating: 9,
    riview: "Rasanya Manis"
});

mangga.save(function(error){
    if(error){
        console.log(error);
    }else {
        console.log("berhasil simpan buah mangga");
    }
})