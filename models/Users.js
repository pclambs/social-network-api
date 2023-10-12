const { Schema, models, model } = require('mongoose')

const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "you must input a username",
        trim: true, 
    },
    email: {
        type: String,
        unique: true,
        required: "must input an email",
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "must input a valid email"]
    },
    thoughts: [],
    friends: [],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
})

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const Users = model(
    "Users", UsersSchema
)

module.exports = Users