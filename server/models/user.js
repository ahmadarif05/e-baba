
let mongoose =  require('mongoose');

let schema = mongoose.Schema(
    
    {
        forgetToken:String,
        name:String,
        password:String,
        img:String      
    }
);

let User = mongoose.model('user', schema);

// website
// https://mongoosejs.com/

// User.find()
// saarey user kay record lekar ajao

// User.findById(recordKiID)
// single record lekar ajao ID se match krke

// User.findByIdAndDelete(recordKiID)
// single record delete kardo ID se match krke
              
// User.findByIdAndUpdate(recordKiID, nyaRecordkaObject)
// single record update kardo ID se match krke






module.exports = User;

// ORM
// object relational mapping