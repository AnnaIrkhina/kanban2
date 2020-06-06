import React, {useState} from 'react';


function TaskListElement(props) {
    const deleteTask = ()=>{
        props.deleteTask(props.el.id);
    }

    const elementPriorityIncrease = ()=>{
        props.elementPriorityIncrease(props.el.id);
    }
    const elementPriorityDecrease = ()=>{
        props.elementPriorityDecrease(props.el.id);
    }

    return (
        <div className="card shadow bg-white rounded">
            <div className="card-body">
                <h5 class = "card-title">{props.el.name}
                    <button type = "button" className= "btn btn-sm float-right" onClick={deleteTask}>
                        <i class = "fa fa-trash-o"></i>
                    </button>
                    <button type="button" className="btn btn-sm float-right">
                        <i className="fa fa-edit"></i>
                    </button>
                </h5>

                <p className="card-text">{props.el.description}</p>
                <button className="btn btn-sm float-left" disabled={props.el.priority === 3} onClick={elementPriorityIncrease}><i class = "fa fa-arrow-up"></i></button>

                <span className={props.el.priority === 3 ? 'btn  btn-sm  btn-danger':
                    props.el.priority ===2 ? 'btn   btn-sm btn-success': ' btn  btn-sm  btn-warning'} width="100%">
                    Priority: {
                    props.el.priority === 3 ? ' High':
                    props.el.priority ===2 ? ' Medium': ' Law'

                }</span>

                <button className="btn btn-sm float-right" disabled={props.el.priority === 1} onClick={elementPriorityDecrease}><i className="fa fa-arrow-down"></i></button>


            </div>
        </div>
    );
}

export default TaskListElement;
