import classes from './ToDoList.module.css' ;
import Button from "./Button";

function ToDoList(props){
    const deleteHandeler = (delIndex) => {
        props.workList.splice(delIndex, 1);
        localStorage.setItem('state', JSON.stringify(props.workList));
        props.setWorkList([...props.workList])
    };

    const onEditHandeler = (index)=> {
       props.setIndex(index);
    };
    const list = props.workList.map((todo, index) => {
        return(
            <li key={Math.random()} className={ classes.item}>
                <div className={'col-sm-10 ' + classes.content}>
                    {todo}
                </div>
                <div className={'col-sm-1 ' + classes.del_btn}>
                    <Button  onClick={() => onEditHandeler(index)} className={'btn btn-primary'}>Edit</Button>
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