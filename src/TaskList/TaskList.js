import React from 'react';
import TaskListElement from "./TaskListElement";


function TaskList(props) {

    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="card-header">

                    <h5>
                        <dif className="float-left">
                            {props.status}
                        </dif>
                        <dif className="float-right">
                            {props.taskList.length}
                        </dif>
                    </h5>

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
