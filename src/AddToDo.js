import { useState} from 'react';
import classes from './AddToDo.module.css'
import Button from './Button';

function AddToDo(){
    const [newTask, setNewTask] = useState('');

    const addNewTaskHandeler = () => {
        
        setNewTask('');
        console.log(newTask);
    };

    return(
        <div className={classes.add_todo}>
            <input className={classes.input_todo} onChange={(e) => setNewTask(e.target.value)}value={newTask} type='text' ></input>
            <Button onClick={addNewTaskHandeler}>Add Task</Button>
        </div>
    );
};

export default AddToDo;