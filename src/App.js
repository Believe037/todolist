import Header from "./component/Header";
import Form from "./component/Form";
import { useState } from "react";
// import Todo from "./component/Todo";
import TodoList from "./component/TodoList";

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);


  return (
    <div className="App">
      <Header></Header>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;
