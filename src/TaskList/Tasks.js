import React from 'react';
import TaskList from "./TaskList";
import TaskListElement from "./TaskListElement";


function Tasks(props) {

    return (
        <div className="container">
            <hr/>
            <div className="row">
                <TaskList status={props.stauses[0]}
                          taskList={props.taskList.filter(el => el.status === props.stauses[0]).sort((a, v) => v.priority - a.priority)}
                deleteTask = {props.deleteTask}
                          elementPriorityDecrease = {props.elementPriorityDecrease}
                          elementPriorityIncrease = {props.elementPriorityIncrease}
                          changePriority = {props.changePriority}
                          statusDecrease = {props.statusDecrease}
                          statusIncrease = {props.statusIncrease}
                />
                <TaskList status={props.stauses[1]} taskList = {props.taskList.filter(el=> el.status === props.stauses[1]).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {props.deleteTask}
                          elementPriorityDecrease = {props.elementPriorityDecrease}
                          elementPriorityIncrease = {props.elementPriorityIncrease}
                          changePriority = {props.changePriority}
                          statusDecrease = {props.statusDecrease}
                          statusIncrease = {props.statusIncrease}
                />
                <TaskList status={props.stauses[2]} taskList = {props.taskList.filter(el=> el.status === props.stauses[2]).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {props.deleteTask}
                          elementPriorityDecrease = {props.elementPriorityDecrease}
                          elementPriorityIncrease = {props.elementPriorityIncrease}
                          changePriority = {props.changePriority}
                          statusDecrease = {props.statusDecrease}
                          statusIncrease = {props.statusIncrease}
                />
                <TaskList status={props.stauses[3]} taskList = {props.taskList.filter(el=> el.status === props.stauses[3]).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {props.deleteTask}
                          elementPriorityDecrease = {props.elementPriorityDecrease}
                          elementPriorityIncrease = {props.elementPriorityIncrease}
                          changePriority = {props.changePriority}
                          statusDecrease = {props.statusDecrease}
                          statusIncrease = {props.statusIncrease}

                          priorities = {props.priorities}
                />
            </div>
        </div>

    );
}

export default Tasks;
