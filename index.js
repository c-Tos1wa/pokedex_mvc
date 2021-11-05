const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());

let pokemon = []

app.get("/", (req, res) => {  
  res.render("index", 
    {
      pokemons: pokemon
    }

  );
    
}); 


app.get("/cadastro", (req, res) => {
  var atr = [
    {
      placeholder: "Digite o número",
      name: "number"
    },
    {
      placeholder: "Que nome quer chama-lo?",
      name: "name"
    },
    {
      placeholder: "Qual o tipo?",
      name: "type"
    },
    {
      placeholder: "Coloque aqui o link da imagem",
      name: "img"
    },
    {
      placeholder: "Faça&uma&descrição",
      name: "description"
    },
    {
      placeholder: "Sua altura é...",
      name: "height"
    },
    {
      placeholder: "Seu peso é...",
      name: "weight"
    },
    {
      placeholder: "Qual a categoria a que pertence?",
      name: "category"
    },
    {
      placeholder: "Qual a habilidade que o pokémon possui?",
      name: "abilities"
    },
  ]
  res.render("cadastro", {
    attributes: atr
  })
});

app.post("/sent", (req, res) => {
  const { name, img, type } = req.body;
  res.send({
    name: name,
    image: img,
    type: type
  });
  //res.redirect("/")
})

app.get("/detalhes", (req, res) => {
  res.render("detalhes")
})


app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));