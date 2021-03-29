<template>
  <div class="todo">
    <h1>Todo</h1>
    <div class="tituloTodo">
      <form action="">
        <label for="">Titulo</label>
        <input type="text" name="titulo" id="titulo" v-model="titulo">
        <label for="">Todo</label>
        <input type="text" name="todo" id="todo" v-model="newTodo" @keyup.enter="Adicionar">
      </form>
    </div>
    <h1>Lista Todo</h1>
    <div class="todolist">
      <ul v-for="(todo) in todo" :key="todo.id">
        <li> {{ todo.id }} - {{ todo.titulo}} {{ todo.newTodo }} - {{ doneSucess }} - {{ index }}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Todo from '@/Service/Todo';

export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data(){
    return{
      id:'',
      titulo:'',
      newTodo:'',
      doneSucess:true,
      eddit:null,
      edditId:0,
      todo:[],
      openDialog:false
    }
  },
  methods:{
    List(){
      Todo.todoList().then(res =>{
      this.todo = res.data
      console.log(res.data)
      })

    },
    Adicionar(){
      const data = {
        newTodo:this.newTodo,
        titulo:this.titulo,
        eddit:this.eddit,
        edditId:this.edditId,
        done:this.done
      }
      if(this.newTodo.trim() !==""){
        if(this.eddit){
          this.todo[this.edditId] = this.newTodo,
          this.infoTodo.newTodo = "",
          this.eddit = false
          console.log(data)
             Todo.todoSave(data)
             this.List();
            alert('atualizado')
            this.newTodo = ''
            }else{
              this.todo.push(this.newTodo),
              console.log(data)
              Todo.todoSave(data)
              this.List();
              alert('Salvo')
              this.newTodo = ''
              }
            }
    },
  }
}
  
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
