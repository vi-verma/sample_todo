import { useState, useEffect} from 'react';
import classes from './AddToDo.module.css'
import Button from './Button';

function AddToDo(props){
    const [newTask, setNewTask] = useState(props.defaultValue || '');
    useEffect(() => {
        setNewTask(props.defaultValue)
    },[props.defaultValue])
    // console.log("prop" + props.defaultValue)
    // const newTaskRef = useRef();
    // console.log(newTask + " state")
    const addNewTaskHandeler = () => {
        if(newTask){
            props.onSubmit(newTask);
            setNewTask('');
            // console.log(props.defaultValue);
        };
       
    };
    const handleKeyUp = (e) => {
        if(e.keyCode === 13 && newTask ){
            props.onSubmit(newTask);
            setNewTask('');
            // console.log(e);
        };
    };
   
    return(
        <div className={classes.add_todo}>
            <input className={classes.input_todo} onKeyUp={(e) => handleKeyUp(e)} onChange={(e) => setNewTask(e.target.value)} value={newTask}  type='text' ></input>
            <Button className={'btn btn-secondary'} onClick={addNewTaskHandeler}>{props.buttonText || "Add Task"}</Button>
        </div>
    );
};

export default AddToDo;