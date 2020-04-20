const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchemaPost = new Schema (
    {
        user : {
            type : String
        },
        pass : {
            type : String
        }
    }
);

module.exports = UserSchemaPost;
