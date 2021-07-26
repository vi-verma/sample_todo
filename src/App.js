import { useState } from 'react';
import classes from  './App.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  const [workList, setWorkList] = useState([]);

  return (
    <div className={classes.App}>
        <AddToDo workList={workList} setWorkList={setWorkList}></AddToDo>
        <ToDoList workList={workList} setWorkList={setWorkList}></ToDoList>
    </div>
  );
}

export default App;
