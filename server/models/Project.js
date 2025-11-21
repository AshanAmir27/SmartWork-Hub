const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
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
    member:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

})

const ProjectModel = mongoose.model('project',ProjectSchema)
module.exports = ProjectModel