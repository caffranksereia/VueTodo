const low = require('lowdb') //chamando o lowdb
const FileSync = require('lowdb/adapters/FileSync')// dentro do lowdb estou chamando o arquivo FilseAsync 
const express = require('express') //Estou chamando o pacote express
const app = express() //instanciando o express no app
const { v4 } = require('uuid')
const router = express.Router()
const cors = require('cors')
const adapter = new FileSync('Todo.json') //criando o db Todo.json 

const db = low(adapter)

const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.defaults({ Todo:[]}).write()


app.get('/TodoAll',(req,res) =>{
    const data = db.get('Todo').value()
    
    res.json(data)
   
})
app.get('/Todo/:id',(req,res) =>{
    
  
    const userTodo = db.get('Todo').find({id:req.params.id}).value()
    
    res.json(userTodo)

})
app.post('/Todo/post',(req,res) =>{

    const NewTodo = {
        id:v4(),
        Titulo:req.body.Titulo,
        Todo:req.body.Todo,
        
    } 

    db.get('Todo').push(NewTodo).write()
    res.send("its ok")
})

app.put('/Todo/update/:id',(req,res) =>{
    const id = req.params.id
    const updatebody = req.body


    const userTodo = db.get('Todo').find({id}).assign(updatebody).write()

   res.json(userTodo)
})

app.delete('/Todo/delete/:id',(req,res) =>{
    const deleteUser = db.get('Todo').remove({id: req.params.id}).write()
    
    res.json(deleteUser)
    
})

app.listen(port,() =>{
    console.log(`localhost:${port}`)
})