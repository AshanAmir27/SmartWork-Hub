const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    action:{
        type:String,
        required:true
    },
    entity:{
        type:String,
        required:true
    },
    entityId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

const ActivityModel = mongoose.model('Activity', ActivitySchema)
module.exports = ActivityModel;