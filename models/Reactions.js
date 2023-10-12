const { Schema, models, model } = require('mongoose')

const reactionsSchema = new Schema({
    Reactions: {},
    email: {},
    thoughts: [],
    friends: [],
},
{
    toJSON: {
        virtuals: true,
    }
})

const Reactions = model(
    "reactions", reactionsSchema
)

module.exports = Reactions