const { Schema, model, Types } = require('mongoose')

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
    thoughts: [
        {
            type: Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Types.ObjectId,
            ref: 'Users'
        }
    ],
},{
    toJSON: {
        virtuals: true,
    },
    id: false
})

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const Users = model("Users", UsersSchema)

module.exports = Users