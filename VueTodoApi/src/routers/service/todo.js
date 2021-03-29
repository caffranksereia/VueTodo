'use strict';

const db = require('../../../db.json')


export.get =  async()=>{
    cons res = await db.get('Todo').find()
}//<--- parei aqui