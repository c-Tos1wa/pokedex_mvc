const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

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
  res.render("cadastro")
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