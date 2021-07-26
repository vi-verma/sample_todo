import classes from './ToDoList.module.css' ;
import Button from "./Button";

function ToDoList(props){
    const deleteHandeler = (delInd) => {
        props.workList.splice(delInd, 1);
        props.setWorkList([...props.workList])
        console.log('ww')
    };


    const list = props.workList.map((todo, index) => {
        return(
            <li className={ classes.item}>
                <div className={'col-sm-10 ' + classes.content}>
                    {todo}
                </div>
                <div className={'col-sm-1 ' + classes.del_btn}>
                    <Button className={'btn btn-primary'}>Edit</Button>
                </div>
                <div className={'col-sm-1 ' + classes.del_btn}>
                    <Button onClick={() => deleteHandeler(index)} className={'btn btn-danger'}>Delete</Button>
                </div>
            </li>
        );
    })
    return(
        <ul className={classes.list_item}>
            <div className='row'>
            {list}
            </div>
        </ul>
    );
};

export default ToDoList;