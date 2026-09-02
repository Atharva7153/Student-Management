const mongoose = require("mongoose")

const TopperSchema = new mongoose.Schema({
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Studento",
        required : true
    }
})

module.exports = mongoose.model("Toppero", TopperSchema)