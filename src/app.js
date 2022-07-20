import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", ()=>{
    console.log("Banco conectado com sucesso!")
})

export const app = express();


app.use(express.json())

// const livros = [
//     {id: 1, "titulo":"Senhor dos Aneis"},
//     {id:2, "titulo":"1984"}
// ]

app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node")
})

app.get("/livros", (req, res)=>{
    livros.find((err, livros)=>{
     res.status(200).json(livros)
    })
    
})

app.get("/livros/:id",(req, res)=>{
    let index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res)=>{
    livros.push(req.body.titulo);

    res.status(201).send("Livro foi cadastrado com sucesso!")
})

app.put("/livros/:id",(req, res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

app.delete("/livros/:id",(req, res)=>{
    let {id} = req.params
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.status(200).send({mensagem:`Livro ${id} removido com sucesso!`});
})


