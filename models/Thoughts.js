const { Schema, models, model } = require('mongoose')

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: {},
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    toObject: {
        virtuals: true
    },
    id: false
})

const Thoughts = model(
    "Thoughts", ThoughtsSchema
)

module.exports = Thoughts