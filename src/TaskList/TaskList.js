import React from 'react';
import TaskListElement from "./TaskListElement";



function TaskList(props) {

    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="row card-title">
                    <div className="col-8">
                        <h5>{props.status}</h5>
                    </div>

                    <div className="col">
                        <h5>{props.taskList.length}</h5>
                    </div>
                </div>
            </div>

            {props.taskList.map((el) =>

                <TaskListElement el={el} deleteTask={props.deleteTask}
                                 elementPriorityDecrease={props.elementPriorityDecrease}
                                 elementPriorityIncrease={props.elementPriorityIncrease}
                                 changePriority={props.changePriority}
                                 statusDecrease={props.statusDecrease}
                                 statusIncrease={props.statusIncrease}
                />
            )}
        </div>

    );
}

export default TaskList;
