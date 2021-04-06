<template>
  <div class="todo">
    
    <h1>Todo</h1>
    <div class="tituloTodo">
      <form action="">
        <label for="">Titulo</label>
        <input type="text" name="titulo" id="titulo" v-model="Titulo">
        <label for="">Todo</label>
        <input type="text" name="todo" id="todo" v-model="Todo" >
      </form>
      <button @click="Adicionar">salvar</button>
    </div>
    <h1>Lista Todo</h1>
    <div class="todolist">
      <ul v-for="todo in todo" :key="todo.id">
        <form action="">
          <input type="text" name="Titulo" id="Titulo">
          <input type="text" name="Todo" id="Todo">

        </form>
        <li> {{ todo.id }} - {{ todo.Titulo}} - {{ todo.Todo }} - {{todo.done}} - {{ todo.eddit }}</li>
        <button @click="Editar(todo.id)">Editar</button>
        <button @click="Excluir(todo.id)">Excluir</button>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Todo from '../Service/Todo';

export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data(){
    return{
     todos:{
       Titulo:'',
        Todo:'',
        done:false,
        eddit:false
     },
      todo:[]
     
    }
  },
  mounted(){
    this.Listar()
  },
  methods:{
    Listar(){
      Todo.todoList().then(res =>{
        this.todo = res.data
        
      })
    },
    Adicionar(){
      const data = {
        Titulo: this.Titulo,
        Todo: this.Todo,
        done: this.done,
        eddit: this.eddit
      }
      Todo.todoSave(data)
      this.Listar()

    
      
    },
    Editar(id){
      Todo.todoUp().then(res=>{
        
      })
    },
    Excluir(id){
      
      Todo.todoDel(id)
        this.Listar()

      
    }
  }
  
}
  
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="">

</style>
