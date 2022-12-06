const express = require("express")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const dbo = require("./db/db")
const { ObjectId } = require("mongodb")
const app = express()
const port = 4444

dbo.connectToServer()

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})

app.get("/pokemon/list", function (req, res) {
    const db = dbo.getDb()
    db
      .collection("pokemon")
      .find({})
      .toArray(function (err, result) {
        if (err){
          res.status(400).send("Error fetching pokemons!")
        }
        res.json(result)
      })
})

app.post("/pokemon/insert", jsonParser, (req, res) => {
  const body = req.body
  console.log('Got body:', body)

  const db = dbo.getDb()
  db.collection("pokemon").insertOne(body)

  res.json(body)
})

app.delete("/pokemon/delete", jsonParser, async (req, res) => {
  const db = dbo.getDb()
  const coll = db.collection("pokemon")
  const body = req.body
  
  if(body._id){
    const query = { _id:ObjectId(body._id) }
  }else if(body.name){
    const query = { name:body.name }
  }

  const result = await coll.deleteOne(query) 
  if(result.deletedCount == 1)
  {
    res.status(200).send(`Succès !\n${query.name} supprimé`)
  }
  else
  {
    res.status(500).send("Raté... :'-(")
  }
})