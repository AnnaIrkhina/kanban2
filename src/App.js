import React, {useState} from 'react';
import Header from "./Header/Header";
import Tasks from "./TaskList/Tasks";
import  {Button} from "react-bootstrap";


const statuses = ['Todo' , 'In Progress', 'Review', 'Done']



const priorities = ['Low', 'Medium', 'High']

const taskListDefoult = [
    {
        id:  Math.random(),
        name: 'Task 1',
        description: 'To do Task 1',
        priority:0,
        status: 'Todo'
    },
    {
        id: Math.random(),
        name: 'Task 2',
        description: 'To do Task 2',
        priority: 1,
        status: 'Review'
    },
    {
        id: Math.random(),
        name: 'Task 3',
        description: 'To do Task 3',
        priority: 2,
        status: 'In Progress'
    },
    {
        id: Math.random(),
        name: 'Task 4',
        description: 'To do Task 3',
        priority: 1,
        status: 'In Progress'
    },
    {
        id: Math.random(),
        name: 'Task 5',
        description: 'To do Task 3',
        priority: 2,
        status: 'Done'
    },
    {
        id: Math.random(),
        name: 'Task 6',
        description: 'To do Task 3',
        priority: 1,
        status:'Done'
    },
]


function App() {
    const [taskList, setTaskList] = useState(taskListDefoult);

    const recalcTaskStatus = (taskList) =>{

        let todoCounter = 0, inProgressCounter = 0, reviewCounter = 0, doneCounter = 0;

        taskList.map( el=>{
            el.status === 0 ? todoCounter ++ :
                el.status === 1? inProgressCounter ++:
                    el.status === 2? reviewCounter++:doneCounter++

        })


    }
    const createTask = (title, description)=>{
        const updatedTaskList = [... taskList];
        updatedTaskList.push({name: title, id:Math.random(), description:description, status:'Todo', priority:1});
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);

    }
    const deleteTask = (id) =>{
        const updatedTaskList = taskList.filter(el=> el.id != id);
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);

    }
    const changePriority = (priority, id)=>{
        console.log(priority);
        const updatedTaskList = taskList.map( el=> {
            if (el.id === id) return {...el, priority: priorities.indexOf(priority)}
            else return el;
        })
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
        console.log("statusDecrease launched");
        const updatedTaskList = taskList.map( el=> {
            console.log(el);
            console.log(el.status);
            console.log(statuses.indexOf(el.status));
            console.log(statuses[ statuses.indexOf(el.status)]);
            if (el.id === id) return {...el, status:statuses[ statuses.indexOf(el.status)-1]}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);
        console.log("statusDecrease exit");

    }
    const statusIncrease = (id) =>{
        const updatedTaskList = taskList.map( el=> {

            if (el.id === id) return {...el, status:statuses[ statuses.indexOf(el.status)+1]}
            else return el;
        })
        setTaskList(updatedTaskList);
        recalcTaskStatus(updatedTaskList);
    }
    return (
        <div>
            <Header createTask = {createTask} />
            <Tasks taskList={taskList} deleteTask = {deleteTask}
                   elementPriorityDecrease = {elementPriorityDecrease}
                   elementPriorityIncrease = {elementPriorityIncrease}
                   changePriority = {changePriority}
                   statusDecrease = {statusDecrease}
                   statusIncrease = {statusIncrease}
                  stauses={statuses}
                   priorities = {priorities}


            />
            {/*<Footer todo = {todo} inProgress = {inProgress} review={review} done = {done}/>*/}
        </div>
    );
}

export default App;
