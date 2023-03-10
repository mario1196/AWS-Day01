const express = require('express')

const app = express();

app.use(express.static("build"))

app.use(express.urlencoded({ extended: false }));

//app.get("/", (req, res) => {
//  console.log("GET /")
//  res.send("<h1>hello aws</h1>")
//});

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    level: 99
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    level: 99
  }
]

app.get("/api/pokemons", (req, res) => {
  console.log("GET /api/pokemons")
  res.send({pokemons: pokemons})
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body
  console.log("POST /api/pokemons", data)
  data.id = pokemons.length+1
  pokemons.push(data)
  //res.send(data)
  res.redirect('/')
})

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));