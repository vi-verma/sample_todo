import { useEffect, useState } from 'react';
import classes from  './App.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  const [toDos, setToDos] = useState([]);
  const [index, setIndex] = useState('')
  
  
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("state")) 
    setToDos(tasks || []) 
  //  tasks ? setWorkList(tasks) :setWorkList([])
  },[setToDos])
  // console.log(workList[index])

  const onAddNewTask = (input) => {
    const q = [input, ...toDos]
    setToDos(q );
    localStorage.setItem("state", JSON.stringify(q));
    };

  const editHandeler = (editedInput) => {
    toDos[index] = editedInput;
    localStorage.setItem("state" , JSON.stringify(toDos))
    setToDos([...toDos]);
    setIndex('');
  };

  return (
    <div className={classes.App}>
      {
        index === '' ?  
        <AddToDo 
          key={'1'} 
          setIndex={setIndex} 
          defaultValue={toDos[index]}
          onSubmit={onAddNewTask}/>
        :
        <AddToDo key={"2"}  
          onSubmit={editHandeler} 
          defaultValue={toDos[index]}
          buttonText='Save'/>
      }
        <ToDoList 
          setIndex={setIndex} 
          workList={toDos} 
          setWorkList={setToDos}
        />
    </div>
  );
}

export default App;
