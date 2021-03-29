import { api } from './Api';



export default {
    todoList:() =>{
    
        return api.get('/TodoList')
    },
    todoSave:() =>{
        return api.post('/TodoList',)
    },
    todoUp:(id) =>{
        return api.put('/TodoList', id)
    },
    todoDel:(id) =>{
        return api.delete('/Todo/todoDel/'+id )
    }
}