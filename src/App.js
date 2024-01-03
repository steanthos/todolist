import "./App.css";
import React, { useState } from 'react';

function App() {
 
const [newTask, setNewTask] = useState("");
const [todoList, setTodoList] = useState([]);

const writeTask = (event) => {
  setNewTask(event.target.value);
}

const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
    taskName: newTask,
  }
  setTodoList([...todoList, task])
}

const deleteTask = (id) => {
  setTodoList(todoList.filter((task) => task.id !== id));
}

  return (
    <div className="App">
    <div className="InsertTask">
    <h1 className="Title">Lista delle cose da fare</h1>
    <input type="text" onChange={writeTask}/>
    <button onClick={addTask}>Aggiungi</button>
    </div>
    <div className="TaskList">
    {todoList.map((task) => {
      return (
        <div>
        <p>{task.taskName}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
        )
    })}
    </div>
    </div>
    );
}

export default App;