const mongoose = require('mongoose');
const {Schema} = mongoose;

const CardSchema = new Schema (
    {
        title: String,
        meow: String,
    }
)