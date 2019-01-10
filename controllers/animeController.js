const axios = require('axios')

module.exports = {
  getTopAnime: function(req,res){
    axios({
      url: "https://api.jikan.moe/v3/top/anime/1/upcoming"
    })
    .then( animes => {
      res.status(200).json(animes.data.top)
    })
    .catch( error => {
      res.status(500).json({error, message: "internal server error"})
    })
  },

  getSeason: function(req,res){
    axios({
      url: "https://api.jikan.moe/v3/season/2018/fall"
    })
    .then( animes => {
      res.status(200).json(animes.data.anime)
    })
    .catch( error => {
      res.status(500).json({error, message: "internal server error"})
    })
  },

  searchBySeason: function(req,res){
    console.log(req.params)
    let {year, season} = req.params
    axios({
      url: `https://api.jikan.moe/v3/season/${year}/${season}`
    })
    .then( animes => {
      res.status(200).json(animes.data)
    })
    .catch( error => {
      res.status(500).json({error, message: "internal server error"})
    })
  },

  getManga: function(req,res){
    axios({
      url: "https://www.mangaeden.com/api/list/0/"
    })
    .then( mangas => {
      let title = req.body.title.split(' ')
      let mangalist = mangas.data.manga
      let value = new RegExp(title[0])
      mangalist = mangalist.filter(function(e){
        return e.t.match(value)
      })
      res.status(200).json(mangalist)
    })
    .catch( error => {
      res.status(500).json({error, message: "internal server error"})
    })
  }
}