import React from 'react';
import TaskList from "./TaskList";
import TaskListElement from "./TaskListElement";


function Tasks(props) {

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
        <div className="container">
            <hr/>
            <div className="row">
                <TaskList status='Todo'
                          taskList={props.taskList.filter(el => el.status === 'Todo').sort((a, v) => v.priority - a.priority)}
                deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status = 'In progress' taskList = {props.taskList.filter(el=> el.status === 'In progress').sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status = 'Review' taskList = {props.taskList.filter(el=> el.status === 'Review').sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status = 'Done' taskList = {props.taskList.filter(el=> el.status === 'Done').sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
            </div>
        </div>

    );
}

export default Tasks;
