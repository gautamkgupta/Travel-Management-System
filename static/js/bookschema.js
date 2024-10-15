const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel',
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

 const bookSchema = new mongoose.Schema({
    place: {
        type: String
    },

    guests: {
        type: String
    },

    arrival: {
        type: Date
    },  

    leaving: {
        type: Date
    }
 
})

const booking = mongoose.model('booking', bookSchema);

module.exports = booking;