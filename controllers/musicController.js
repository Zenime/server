const axios = require('axios')

class MusicController {
    static searchSong(req, res) {
        axios({
            method:'get',
            url:`https://deezerdevs-deezer.p.mashape.com/search?q=${req.query.q}`,
            headers: {
                "X-Mashape-Key": process.env.MASHAPE_KEY ,
                "Accept": "text/plain"
            }
          })
            .then(function(response) {
                let list = response.data.data
                res.status(200).json({
                    msg: `Success getting music`,
                    list
                })
          })
            .catch(err => {
                res.status(500).json({
                    msg: `Internal server error`,
                    error: err.message
                })
            })
    }
}
module.exports = MusicController