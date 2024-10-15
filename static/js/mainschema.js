const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

 const contactmainSchema = new mongoose.Schema({
    Name: {
        type: String,
        require:true
    },

    Email: {
        type: String,
        require:true
    },

    Phone: {
        type: Number,
        require:true
    },  

    Message: {
        type: String,
        require:true
    }
 
})

const feedback = mongoose.model('feedback', contactmainSchema);

module.exports = feedback;