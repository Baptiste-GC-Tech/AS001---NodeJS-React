const express = require("express")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const dbo = require("./db/db")
const { ObjectId } = require("mongodb")
const cors = require("cors")
const app = express()
const port = 4444

dbo.connectToServer()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})

app.get("/", function (req, res) {
  res.send("Hello World!")
})

// ##############################################################################################

app.get("/pokemon/list", function (req, res) {
  const db = dbo.getDb()
  const coll = db.collection("pokemon")

  coll.find({}).toArray(function (err, result) {
    if (err)
    {
      res.status(400).send("Error fetching pokemons!")
    }
    res.json(result)
  })
})

app.post("/pokemon/insert", jsonParser, (req, res) => {
  const db = dbo.getDb()
  const coll = db.collection("pokemon")
  const body = req.body

  console.log('Got body from pokemon/insert/:', body)

  coll.find({name: body.name}).toArray(function (err, result) {
    if (err)
    {
      res.status(400).send("Error fetching pokedex!")
    }
    console.log("result[0] :", result[0])
    if (result[0] === undefined)
    {
      coll.insertOne(body)
      res.status(200).json(body)
    }
    else
    {
      res.status(500).json(body)
    }
  })
})

app.post('/pokemon/update', jsonParser, (req, res) => {
  const option = { upsert: false };
  const filter = {name:req.body.name};
  const newData = {
    $set:{
      name: req.body.newName,
      img: req.body.newImg
    }
  }
  console.log('Got body:', newData);
  
  const db = dbo.getDb()
  const coll = db.collection("pokemon")
  coll.updateOne(filter,newData,option);
  res.json(newData);
});

app.delete("/pokemon/delete", jsonParser, async (req, res) => {
  const db = dbo.getDb()
  const coll = db.collection("pokemon")
  const body = req.body
  const query = { name: body.name }

  const result = await coll.deleteOne(query) 
  if(result.deletedCount === 1)
  {
    res.status(200).send(`Succès !\n${query.name} supprimé`)
  }
  else
  {
    res.status(500).send("Raté... :'-(")
  }
})

// ##############################################################################################

app.get("/pokedex/list", function (req, res) {
  const db = dbo.getDb()
  const coll = db.collection("pokedex")
  const body = req.body

  coll.find({}).toArray(function (err, result) {
    if (err)
    {
      res.status(400).send("Error fetching pokedex!")
    }
    res.json(result)
  })
})

app.post("/pokedex/insert", jsonParser, (req, res) => {
  const db = dbo.getDb()
  const coll = db.collection("pokedex")
  const body = req.body

  console.log('Got body of pokedex/insert/ :', body)

  coll.find({name: body.name}).toArray(function (err, result) {
    if (err)
    {
      res.status(400).send("Error fetching pokedex!")
    }
    console.log("result[0] :", result[0])
    if (result[0] === undefined)
    {
      coll.insertOne(body)
      res.status(200).json(body)
    }
    else
    {
      res.status(500).json(body)
    }
  })
})

app.delete("/pokedex/delete", jsonParser, async (req, res) => {
  const db = dbo.getDb()
  const coll = db.collection("pokedex")
  const body = req.body
  
  const query = { name:body.name }

  coll.find(query).toArray(function (err, result) {
    if (err)
    {
      res.status(400).send("Error fetching pokedex!")
    }
    if (result !== undefined)
    {
      console.log("Un truc à supprimé")
    }
    else
    {
      console.log("Pas de truc à supprimé")
    }
  })
  // const success = await coll.deleteOne(query)
  // if(success.deletedCount === 1)
  // {
  //   res.status(200).send(`Succès !\n${query.name} supprimé`)
  // }
  // else
  // {
  //   res.status(500).send("Raté... :'-(")
  // }
})