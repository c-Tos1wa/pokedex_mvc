const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
  const pokemon = [
    {
      number: 77,
      name: "Ponyta",
      type: "fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png",
      description: "It can't run properly when it's newly born.",
      height: 1,
      weight: 30,
      category: "Fire Horse",
      abilities: "run away, flash fire"
    },

    {
      number: 58,
      name: "Growlithe",
      type: "fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
      description: "It has a brave and trustworthy nature.",
      height: 0.7,
      weight: 19,
      category: "puppy",
      abilities: "intimidate, flash fire"
    },
    {
      number: 148,
      name: "Dragonair",
      type: "dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
      description: "It can control the weather.",
      height: 4,
      weight: 16.5,
      category: "dragon",
      ability: "shed skin"
    }

  ];
  
  res.render("index", 
    {
      pokemons: pokemon
    }

    );
    
}); 


app.get("/cadastro", (req, res) => {
  res.render("cadastro")
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes")
})


app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));