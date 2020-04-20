require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/fiftech';

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

if(process.env.NODE_ENV !== "test") {
    mongoose.connect(MONGO_URI).then(()=>{
            console.log('I connect to mongoose');
        },
        err => {
            console.log('Something went wrong');
            console.log(err.stack)
        }
    );
}

