const { Schema, model } = require('mongoose')
const ReactionsSchema = require('./Reactions')

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
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema]
},{
    toJSON: {
        virtuals: true,
        getters: true
    },
    toObject: {
        virtuals: true
    },
    id: false
})

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thoughts = model("Thoughts", ThoughtsSchema)

module.exports = Thoughts