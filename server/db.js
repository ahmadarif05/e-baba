let mongoose = require('mongoose');
// mongoose aik JS m likhi hui library h jo mongodb server ke saaath interact krwati h

mongoose.connect('mongodb://localhost:27017/meri-achi-db').then(function(conne){

console.log(conne)

}).catch(function(err){
    console.log(err);
})