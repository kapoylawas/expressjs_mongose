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

// Fruit.updateOne({_id: '6194781659940e0b985039fc'}, {name: 'Nanas'}, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('berhasil update nama buah');
//     }
// })

Fruit.deleteOne({_id: '6194781659940e0b985039fc'}, function(error){
        if(error){
            console.log(error);
        }else{
            console.log('berhasil delete nama buah');
        }
})

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    }else {
        mongoose.connection.close();

        console.log('nama buah setelah di delete');
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})