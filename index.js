const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
  res.render("index");
}); 


app.get("/cadastro", (req, res) => {
  res.render("cadastro")
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes")
})


app.listen ( port, () => console.log(`Servidor rodando em localhost:${port}`));