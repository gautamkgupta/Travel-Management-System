
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },

    email: {
        type: String,
        require:true,
        unique:true
    },

    phone: {
        type: Number,
        require:true,
        unique:true
    },  

    password: {
        type: String,
        require:true,
    }, 

    cpassword: {
        type: String,
        require:true
    }   
})

const login = mongoose.model('login', contactSchema);

module.exports = login;