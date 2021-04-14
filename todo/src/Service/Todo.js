 import  {apiTodo} from './Api';



export default {
    todoList:() =>{
        
        return apiTodo.get('TodoAll')
    },
    todoSave:(todos) =>{
        return apiTodo.post('/Todo/post',todos)
    },
    todoUp:(id,todo) =>{
        return apiTodo.put(`/Todo/update/${id}`,todo);
        
    },
    todoDel:(id) =>{
        return apiTodo.delete(`/Todo/delete/${id}`)
    }
}