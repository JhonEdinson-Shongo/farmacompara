const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    }
});

module.exports = model("product",productSchema);