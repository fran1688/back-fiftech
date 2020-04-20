const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        name : {
            type: String,
            required : 'the name is required.'
        },
        email : {
            type : String,
            required : 'the email user required.'
        },
        pass : {
            type : String,
            required : 'the pass required.'
        },
        role : [
            {
            type : String,
            default : 2,
            enum : [ 'Admin', 'User', 'SuperUser']
        }
        ],
        isAvailable : {
            type : Boolean,
            default: true
        }
    },
    {
        timestamp : true
    }
);

const user = mongoose.model('login', UserSchema);

module.exports = user;
