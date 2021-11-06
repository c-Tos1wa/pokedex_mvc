const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());

let pokemon = [];
let message = "";

app.get("/", (req, res) => {  
  res.render("index", 
    {
      pokemons: pokemon,
      message
    }
  ); 
}); 


app.get("/cadastro", (req, res) => {
  res.render("cadastro")
});

app.post("/sent", (req, res) => {
  const { number, name, type, image, description, height, weight, category, abilities } = req.body;
  pokemon.push({ number, name, image, type, description, height, weight, category, abilities })
  message = "Dados enviados com sucesso!"
  res.redirect("/")
})

app.get("/detalhes/:id", (req, res) => {
  var id = req.params.id;
  const pokemonById = pokemon[id];
  res.render("detalhes",
  {
    pokemons: pokemonById
  })
})


app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));