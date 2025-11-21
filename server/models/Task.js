const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'project',
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    priority:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        enum:['High', 'medium', 'low'],
        default: 'low'
    },
    dueDate:{
        type: Date,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel