import "./App.css";
import { useState } from "react";
import { Task } from "./Task.js"

/*
function App() {
const users = [{name: "Gledis", age: 21},{name: "Gledis2", age: 20}];
  return (
      <div className="App">
        {users.map((user, key) => {
          return (
            <User name={user.name} age={user.age} />
          );
        })}
      </div>
    );
}

const User = (props) => {
  return(
    <div>
      <h1>{props.name}, {props.age}</h1>
    </div>
  )
}
*/

  // const [age, setAge] = useState(0);
  // // the variable we want to change, the function that changes it
  // // and calling the useState, 0 is the init value of age

  // const increaseAge = () => {
  //   setAge(age + 1);
  // };

  // const [count, setCount] = useState(0);
  // return (
  //   <div className="App">
  //     <button onClick={() => {
  //      setCount(count + 1);
  //     }}>Increase
  //     </button>

  //     <button onClick={() => {
  //      setCount(count - 1);
  //     }}>Decrease
  //     </button>

  //     <button onClick={() => {
  //      setCount(0);
  //     }}>0
  //     </button>
      
  //     <h1>{count}</h1>
  //   </div>
  // );

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task]);
    setNewTask('');
    };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(
        //loop through todoList, check all of them for id and change
        todoList.map((task) => {
          if (task.id === id){
            task.completed = !task.completed;
            return task;
          } else {
            return task;
          }
        })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask}onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task
              taskName = {task.taskName}
              id={task.id}
              completed = {task.completed}
              deleteTask = {deleteTask}
              completeTask = {completeTask}
          />;
        })}
      </div>
    </div>
  )
}

export default App;