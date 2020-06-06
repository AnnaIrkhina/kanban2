import React from 'react';
import TaskListElement from "./TaskListElement";

function TaskList(props) {
    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="card-header">
                    <h5>{props.status}</h5>
                </div>
            </div>

            {props.taskList.map((el) =>

                <TaskListElement el={el}/>
            )}
        </div>

    );
}

export default TaskList;
