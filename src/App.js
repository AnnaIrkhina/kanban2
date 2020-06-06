import React, {useState} from 'react';
import Header from "./Header/Header";
import Tasks from "./TaskList/Tasks";

import Footer from "./Footer/Footer";
import TaskListElement from "./TaskList/TaskListElement";

const taskListDefoult = [
    {
        id:  Math.random(),
        name: 'Task 1',
        description: 'To do Task 1',
        priority: 1,
        status: 0
    },
    {
        id: Math.random(),
        name: 'Task 2',
        description: 'To do Task 2',
        priority: 2,
        status: 1
    },
    {
        id: Math.random(),
        name: 'Task 3',
        description: 'To do Task 3',
        priority: 3,
        status: 2
    },
    {
        id: Math.random(),
        name: 'Task 4',
        description: 'To do Task 3',
        priority: 2,
        status: 2
    },
    {
        id: Math.random(),
        name: 'Task 5',
        description: 'To do Task 3',
        priority: 3,
        status: 3
    },
    {
        id: Math.random(),
        name: 'Task 6',
        description: 'To do Task 3',
        priority: 2,
        status: 3
    },
]


function App() {
    const [taskList, setTaskList] = useState(taskListDefoult);
    const createTask = (title, description)=>{
        const updatedTaskList = [... taskList];
        updatedTaskList.push({name: title, id:Math.random(), description:description, status:0, priority:1});
        setTaskList(updatedTaskList);
    }
    const deleteTask = (id) =>{
        const updatedTaskList = taskList.filter(el=> el.id != id);
        setTaskList(updatedTaskList);

    }
    const elementPriorityDecrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, priority: el.priority-1}
            else return el;
        })
        setTaskList(updatedTaskList);

    }
    const elementPriorityIncrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, priority: el.priority+1}
            else return el;
        })
        setTaskList(updatedTaskList);
    }
    return (
        <div>
            <Header createTask = {createTask}/>
            <Tasks taskList={taskList} deleteTask = {deleteTask}
                   elementPriorityDecrease = {elementPriorityDecrease}
                   elementPriorityIncrease = {elementPriorityIncrease}
            />
            <Footer/>
        </div>
    );
}

export default App;
