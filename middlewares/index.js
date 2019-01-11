const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = process.env.CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)
const User = require('../models/User')

module.exports = {
    verifyGoogle: function(req, res, next) {
        console.log(req.body.gToken)
        client.verifyIdToken({
            idToken: req.body.gToken,
            audience: CLIENT_ID
        }, function (err, result) {
            if (err) {
                res.status(401).json({
                    msg: `Please login first`
                })
            } else {
                const payload = result.getPayload()
                let user = {
                    name: payload.name,
                    email: payload.email,
                }
                req.currentUser = user
                console.log(req.currentUser)
                next()
            }
        })
    },
    isLogin: function(req, res, next) {
        let token = req.headers.token
        if(token) {
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
            User
                .findOne({ email: decoded.email })
                .then((user) => {
                    if (user) {
                        next()
                    } else {
                        res.status(400).json({
                            msg: `Please login first!`
                        })
                    }
                })
                .catch((err) => {
                    res.status(500).json(err.message)
                })
        }
    }
}