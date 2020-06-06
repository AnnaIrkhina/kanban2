import React from 'react';
import TaskList from "./TaskList";


function Tasks(props) {

    // const [taskTodoList, setTaskTodoList] = useState(props.taskList.filter(el=> el.status === 'Todo').sort((a,v)=>v.priority-a.priority));
    return (
        <div className="container">
            <hr/>
            <div className="row">
                <TaskList status='Todo'
                          taskList={props.taskList.filter(el => el.status === 'Todo').sort((a, v) => v.priority - a.priority)}/>
                <TaskList status = 'In progress' taskList = {props.taskList.filter(el=> el.status === 'In progress').sort((a,v)=>v.priority-a.priority)} />
                <TaskList status = 'Review' taskList = {props.taskList.filter(el=> el.status === 'Review').sort((a,v)=>v.priority-a.priority)} />
                <TaskList status = 'Done' taskList = {props.taskList.filter(el=> el.status === 'Done').sort((a,v)=>v.priority-a.priority)} />
            </div>
        </div>

    );
}

export default Tasks;
