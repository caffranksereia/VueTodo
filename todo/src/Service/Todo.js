 import  {apiTodo} from './Api';



export default {
    todoList:() =>{
        
        return apiTodo.get('TodoAll')
    },
    todoSave:(todos) =>{
        return apiTodo.post('/Todo/post',todos)
    },
    todoUp:(todos) =>{
        return apiTodo.put('/Todo/update/',todos)
    },
    todoDel:(id) =>{
        return apiTodo.delete(`/Todo/delete/${id}`)
    }
}