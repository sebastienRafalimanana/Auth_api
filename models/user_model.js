var mongoose = require('mongoose');

var user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
    collection: "user"
});


user_schema.statics.createUser = async function(name, lastName, email, password) {
    try {
        const user = await this.create({name, lastName, email,password });
        return user;
    } catch (error) {
        throw error;
    }
}

user_schema.statics.getUsers = async function() {
    try {
        const users = await this.find();
        return users;
    } catch (error) {
        throw error;
    }
}
user_schema.statics.getOneUsers = async function(email,password) {
    try {
        const users = await this.findOne({ email: email, password: password });
        return users;
    } catch (error) {
        throw error;
    }
}
user_schema.statics.getVerify = async function(email) {
    try {
        const users = await this.findOne({ email: email});
        return users;
    } catch (error) {
        throw error;
    }
}

module.exports = mongoose.model('users', user_schema);