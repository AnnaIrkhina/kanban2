import React from 'react';
import TaskListElement from "./TaskListElement";

function TaskList(props) {
    const deleteTask = (id)=>{
        props.deleteTask(id);
    }
    const elementPriorityDecrease = (id) =>{
        props.elementPriorityDecrease(id);

    }
    const elementPriorityIncrease = (id) =>{
        props.elementPriorityIncrease(id);
    }
    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="card-header">
                    <h5>{
                        props.status === 0? "Todo":
                            props.status === 1? "In propgres":
                                props.status === 2 ? "Review": "Done"
                    }</h5>
                </div>
            </div>

            {props.taskList.map((el) =>

                <TaskListElement el={el} deleteTask = {deleteTask}
                                 elementPriorityDecrease = {elementPriorityDecrease}
                                 elementPriorityIncrease = {elementPriorityIncrease}
                />
            )}
        </div>

    );
}

export default TaskList;
