const jwt = require('jsonwebtoken')

module.exports = {
    generateJsonToken: function (user) {
        return jwt.sign(user, process.env.JWT_SECRET)
    }
}