const http = require("http")
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros':'Você chegou na página de livros',
    '/autores':'Você está na página de autores',
    '/editora': 'Lista de editoras',
    '/sobre':'curiosidades'
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})