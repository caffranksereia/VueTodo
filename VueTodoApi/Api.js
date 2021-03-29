const low = require('lowdb') //lowdb server do db.js
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.js')
const db = low(adapter)

const { nanoid } = require('nanoid') // Id genarator 


const express = require('express') // express 
const app = express()
const port = 3000

db
    .defaults({ Todo: []})
    .write()

app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})