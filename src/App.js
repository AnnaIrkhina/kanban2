import React, {useState} from 'react';
import Header from "./Header/Header";
import Tasks from "./TaskList/Tasks";

import Footer from "./Footer/Footer";

const taskListDefoult = [
    {
        id: 12,
        name: 'Task 1',
        description: 'To do Task 1',
        priority: 10,
        status: 'Done'
    },
    {
        id: Math.random(),
        name: 'Task 2',
        description: 'To do Task 2',
        priority: 20,
        status: 'Todo'
    },
    {
        id: Math.random(),
        name: 'Task 3',
        description: 'To do Task 3',
        priority: 30,
        status: 'Todo'
    },
]


function App() {
    const [taskList, setTaskList] = useState(taskListDefoult);
    const createTask = (title, description)=>{
        const updatedTaskList = [... taskList];
        updatedTaskList.push({name: title, id:Math.random(), description:description, status:'Todo', prioryty:10});
        setTaskList(updatedTaskList);
    }
    return (
        <div>
            <Header createTask = {createTask}/>
            <Tasks taskList={taskList}/>
            <Footer/>
        </div>
    );
}

export default App;
