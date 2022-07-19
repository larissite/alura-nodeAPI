import { app } from "./src/app.js";

const port = process.env.PORT || 3003;



app.listen(port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})