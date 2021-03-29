<template>
  <div class="todo">
    <h1>Todo</h1>
    <div class="tituloTodo">
      <form action="">
        <label for="">Titulo</label>
        <input type="text" name="titulo" id="titulo">
        <label for="">Todo</label>
        <input type="text" name="todo" id="todo">
      </form>
    </div>
    <h1>Lista Todo</h1>
    <div class="todolist">
      <ul>
        <li></li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    msg: String
  },
  data(){
    return{
      id:'',
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

    }
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
