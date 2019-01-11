const axios = require('axios')

class VoicerController {
    static speech(req, res) {
        axios({
           method: 'get',
           url: `http://api.voicerss.org/?key=${process.env.VOICERS_KEY}&hl=en-us&src='${req.headers.text}'&c=mp3&f=44khz_16bit_stereo&b64=true`
        })
        .then(response => {
            res.status(200).json({
                msg: `Success text to speech`,
                data: response.data
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Internal server error`,
                error: err
            })
        })
    }
}
module.exports = VoicerController