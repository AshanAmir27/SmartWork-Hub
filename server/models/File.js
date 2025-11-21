const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    s3url:{
        type:String,
        required:true
    },
    uploadedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'project'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const FileModel = mongoose.model("File", FileSchema);
module.exports = FileModel;