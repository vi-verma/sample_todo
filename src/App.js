import { useEffect, useState } from 'react';
import classes from  './App.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  const [workList, setWorkList] = useState([]);
  const [index, setIndex] = useState('')
  
  
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("state")) 
    setWorkList(tasks || []) 
  //  tasks ? setWorkList(tasks) :setWorkList([])
  },[setWorkList])
  // console.log(workList[index])

  const onAddNewTask = (input) => {
    const q = [input, ...workList]
    setWorkList(q );
    localStorage.setItem("state", JSON.stringify(q));
    };

  const editHandeler = (editedInput) => {
    workList[index] = editedInput;
    localStorage.setItem("state" , JSON.stringify(workList))
    setWorkList([...workList]);
    setIndex('');
  };

  return (
    <div className={classes.App}>
      {
        index === '' ?  
        <AddToDo 
          key={'1'} 
          setIndex={setIndex} 
          defaultValue={workList[index]}
          onSubmit={onAddNewTask}/>
        :
        <AddToDo key={"2"}  
          onSubmit={editHandeler} 
          defaultValue={workList[index]}
          buttonText='Edit'/>
      }
        <ToDoList 
          setIndex={setIndex} 
          workList={workList} 
          setWorkList={setWorkList}
        />
    </div>
  );
}

export default App;
