var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient;
var assign = require('object-assign')

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout)

const connectDb = (onConnect) => {
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("articles_db");
    onConnect(dbo);
  });
}

router.get('/article', function(req, res, next) {
  connectDb((dbo) => {

    dbo.collection("articles").find({}).toArray(function(err, result) {
      if (err) throw err;
      var articles = result.map(function(article) {
          return assign({}, article, {

          })
      }),
      limit = Number(req.query.limit) || articles.length,
      offset = Number(req.query.offset) || 0
      reply(res, articles.slice(offset, limit + offset))

    })
  })
})

router.post('/article', function(req, res, next) {
  connectDb((dbo) => {

    var body = req.body
    console.log(req)

    var article = {
      id: Date.now().toString(),
      title: body.title,
      years: body.years,
      location: body.location,
      description: body.description,
      members: body.members
    }

    dbo.collection("articles").insertOne(article, function(err, res){
      if (err) throw err;
    })
    reply(res, article)
  });

})

module.exports = router
