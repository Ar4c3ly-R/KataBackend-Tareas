const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'por favor teclea un valor']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)