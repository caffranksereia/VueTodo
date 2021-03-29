const low = require('lowdb')
const express = require('express')
const app = express()
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)



db.defaults({Todo:[]}).write()


db.get('Todo').push({id:1,title:'Tomando agua',todo:'As 17 horas tenho que tomar agua'}).write()

