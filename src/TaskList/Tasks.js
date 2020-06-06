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
                <TaskList status="0"
                          taskList={props.taskList.filter(el => el.status === 0).sort((a, v) => v.priority - a.priority)}
                deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status ={1} taskList = {props.taskList.filter(el=> el.status === 1).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status ={2} taskList = {props.taskList.filter(el=> el.status === 2).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
                <TaskList status ={3} taskList = {props.taskList.filter(el=> el.status === 3).sort((a,v)=>v.priority-a.priority)}
                          deleteTask = {deleteTask}
                          elementPriorityDecrease = {elementPriorityDecrease}
                          elementPriorityIncrease = {elementPriorityIncrease}
                />
            </div>
        </div>

    );
}

export default Tasks;
