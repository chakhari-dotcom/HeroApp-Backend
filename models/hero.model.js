const mongoose = require('mongoose');

const hero=mongoose.model('hero',{
    name:{type:String},
    power:{type:Number},
    image:{type:String}
    });

    module.exports=hero;