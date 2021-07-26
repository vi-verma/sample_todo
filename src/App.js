import { useState } from 'react';
import classes from  './App.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function App() {
  const [workList, setWorkList] = useState([]);
  const [index, setIndex] = useState('')
console.log(workList[index])
  const onAddNewTask = (input) => {
    setWorkList([input, ...workList]);
    };

  const editHandeler = (editedInput) => {
    workList[index] = editedInput;
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
