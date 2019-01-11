const User = require('../models/User')
const { generateJsonToken } = require('../helpers')

module.exports = {
    googleLogin: function(req, res) {
        let token = generateJsonToken({
            name: req.currentUser.name,
            email: req.currentUser.email
        })
        console.log(token)
        if (token) {
            res.status(200).json({
                token: token,
                msg: `Google Login Success`
            })
        }
        User
            .findOne({ email: req.currentUser.email })
            .then(gUser => {
                if (!gUser) {
               
                    User
                        .create({
                            name: req.currentUser.name,
                            email: req.currentUser.email,
                            password: process.env.password,
                        })
                        .then(user => {
                            res.status(200).json(user)
                        })
                        .catch(err => {
                            res.status(500).json({
                                msg: `Internal server error`
                            })
                        })
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg: `Internal server error`
                })
            })
    }
}