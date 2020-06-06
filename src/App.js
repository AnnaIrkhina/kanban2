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

    const[todo, setTodo] = useState(1);
    const[inProgress, setInProgress] = useState(1);
    const[review, setReview] = useState(2);
    const[done, setDone] = useState(2);

    const recalcTaskStatus = (taskList) =>{

        let todoCounter = 0, inProgressCounter = 0, reviewCounter = 0, doneCounter = 0;

        taskList.map( el=>{
            el.status === 0 ? todoCounter ++ :
                el.status === 1? inProgressCounter ++:
                    el.status === 2? reviewCounter++:doneCounter++

        })
        setTodo(todoCounter);
        setInProgress(inProgressCounter);
        setReview(reviewCounter);
        setDone(doneCounter);

    }
    const createTask = (title, description)=>{
        const updatedTaskList = [... taskList];
        updatedTaskList.push({name: title, id:Math.random(), description:description, status:0, priority:1});
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);

    }
    const deleteTask = (id) =>{
        const updatedTaskList = taskList.filter(el=> el.id != id);
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);

    }
    const elementPriorityDecrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, priority: el.priority-1}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);
    }

    const elementPriorityIncrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, priority: el.priority+1}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);
    }
    const statusDecrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, status: el.status-1}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);

    }
    const statusIncrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, status: el.status+1}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);
    }
    return (
        <div>
            <Header createTask = {createTask}/>
            <Tasks taskList={taskList} deleteTask = {deleteTask}
                   elementPriorityDecrease = {elementPriorityDecrease}
                   elementPriorityIncrease = {elementPriorityIncrease}
                   statusDecrease = {statusDecrease}
                   statusIncrease = {statusIncrease}
            />
            <Footer todo = {todo} inProgress = {inProgress} review={review} done = {done}/>
        </div>
    );
}

export default App;
