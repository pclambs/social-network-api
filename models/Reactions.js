const { Schema, Types } = require('mongoose')


const ReactionsSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionText: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    toJSON: {
        getters: true,
    }
})

module.exports = ReactionsSchema