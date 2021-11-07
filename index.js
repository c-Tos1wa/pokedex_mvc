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
  
  setTimeout(() => {
    message = "";
  }, 5000)
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
  const information = req.body;
  pokemon.push(information)
  message = "Dados enviados com sucesso!"
  res.redirect("/")
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemonById = pokemon[id];
  res.render("detalhes", { pokemonById })
})


app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));