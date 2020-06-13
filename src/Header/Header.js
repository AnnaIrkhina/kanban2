import React, {useState} from 'react';

const objToday = new Date();

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekday[objToday.getDay()];
const dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = months[objToday.getMonth()];
const curYear = objToday.getFullYear();

const today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;


function Header(props) {
    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState("");
    const [taskInputDescription, setTaskInputDescription] = useState("");

    const [isActiveBtnTaskCreate, setIsActiveBtnTaskCreate] = useState(false);
    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    }
    const onChange = (e) => {
        setIsActiveBtnTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);

    }
    const onChangeDescription = (e) => {
        setTaskInputDescription(e.target.value);
    }
    const taskSubmit = (e) => {
        e.preventDefault();
        console.log(taskInput, taskInputDescription);
        props.createTask(taskInput, taskInputDescription);
        setIsOpenCreateTaskForm(false);
        setIsActiveBtnTaskCreate(false);
        setTaskInput("");
        setTaskInputDescription("");

    }
    const taskReset = (e) => {
        e.preventDefault();
        setIsOpenCreateTaskForm(false);
        setIsActiveBtnTaskCreate(false);
        setTaskInput("");
        setTaskInputDescription("");
    }

    return (

        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Kanban </h1>
                </div>
                <div class="col float-right">
                    <h1>{today}</h1>
                </div>
            </div>

            {!isOpenCreateTaskForm &&
            <button className="btn btn-primary" onClick={openCreateTaskForm}>Create Task</button>}

            {isOpenCreateTaskForm &&

            <form>
                <div class="form-group">
                    <label htmlFor="exampleInpu email1">Title</label>
                    <input type="text" class="form-control" onChange={onChange} value={taskInput}/>
                    <label htmlFor="exampleInpu email1">Description</label>
                    <input type="text" className="form-control" onChange={onChangeDescription}
                           value={taskInputDescription}/>
                </div>
                <button type="submit" className="btn btn-primary"
                        onClick={taskSubmit}
                        disabled={!isActiveBtnTaskCreate}>Submit
                </button>
                <button className="btn btn-secondary"
                        onClick={taskReset}>
                    Task Reset
                </button>
            </form>
            }
        </div>
    );
}

export default Header;
