const { Translate } = require('@google-cloud/translate');
const projectId = process.env.PROJECT_ID;
 
const translate = new Translate({
  projectId: projectId,
});

module.exports = {
  translateText: function(req, res) {
    const text = req.body.text
    const target = req.body.target
     
    translate
      .translate(text, target)
      .then(results => {
        const translation = results[0];
        console.log(translation)
        res.status(200).json(translation)
      })
      .catch(err => {
        console.log(err)
        // console.error('ERROR:', err);
      });
  },
  languageList: function(req, res) {
    const translate = new Translate({
      projectId: projectId
    })
    translate
      .getLanguages()
      .then(lists => {
        res.status(200).json(lists[1].data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
 
