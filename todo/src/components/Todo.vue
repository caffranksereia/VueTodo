<template>
  <div class="todo" style="height=100%;width:100%;">
    <div class="txt" style="width:100%;height:100px;">
      <h1>Todo</h1>
    </div>
    <div class="tituloTodo" style="height:100px;width:100%;left:50%;">
      <form>
        <div class="meu-box">
          <label class="label-Titulo">Titulo</label>
          <input type="text" name="titulo" id="titulo" v-model="Titulo" placeholder="Titulo" class="input-Titulo">
        </div>
       <div class="meu-box">
          <label class="label-Todo">Todo</label>
          <input type="text" name="todo" id="todo" v-model="Todo" placeholder="Todo" class="input-Todo">
        </div>
      </form>
      <button @click="Adicionar" style="width:100px;margin-top:10px">Adicionar</button>
    </div>
    <div class="txt" style="width:100%;height:100px;">
      <h1>Lista Todo</h1>
    </div>
    <div class="todolist" style="height:250px;width:100%" >
      <ul v-for="todo of todos" :key="todo.id">
        <div style="width:100%">
          <li><div>
                <h3>Titulo</h3>
                {{ todo.Titulo}} 
              </div>
              <div>
                <h3>Todo </h3>
                {{ todo.Todo}} 
              </div>
          </li>
        </div>
        <button @click="Excluir(todo.id)" style="margin-top:10px">Excluir</button>
        <button @click="Editar(todo)">Editar</button>
        
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
     todo:{
       id:"",
       Titulo:"",
       Todo:""
      },
      todos:[]
    }
  },
  mounted(){
    this.Listar()
  },
  methods:{
    Listar(){
      Todo.todoList().then(res =>{
        this.todos = res.data
        
      })
    },
    Adicionar(){
      const data = {
        Titulo: this.Titulo,
        Todo: this.Todo,
      }
      if(this.Todo.trim() !==""){
        Todo.todoSave(data)
        this.Listar()
      }else{
        this.todo.push(this.Todo),
        Todo.todoUp(data)
        this.List();
        alert('Salvo')
        this.Todo = ''
      }
    },
    Editar(todo){
      console.log(todo)


    }
    ,
    Excluir(id){
      Todo.todoDel(id)
      this.Listar()
    }
  }
    
  
}
  
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="">
h1{
  height: 200px;
}
ul{
  list-style-type: none;
}
label{
  margin-right: 10px;
}


.meu-box
{
  position: relative;
}

.input-Titulo
{
  width: 70%;
  position: relative;
  font-size: 16px;
  color: #5b5b5b;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
}

.label-Titulo
{
  width: 70%;
  position: absolute;
  color: Goldenrod;
  font-weight: bold;
  top: 0; bottom: 0; left: 0; right: 0;
  transition: 0.5s;                
}

.input-Titulo:focus + .label-Titulo
{
  margin-top: 0px;
  top: -50%;
  z-index: 2;
  transition: 0.2s;  
}
.input-Todo
{
  width: 70%;
  position: relative;
  font-size: 16px;
  color: #5b5b5b;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
}

.label-Todo
{
  width: 70%;
  position: absolute;
  color: Goldenrod;
  font-weight: bold;
  top: 0; bottom: 0; left: 0; right: 0;
  transition: 0.5s;                
}

.input-Todo:focus + .label-Todo
{
  margin-top: 0px;
  top: -50%;
  z-index: 2;
  transition: 0.2s;  
}
</style>
