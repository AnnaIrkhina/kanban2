import React, {useState} from 'react';


function Header(props) {
    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState("");
    const [taskInputDescription, setTaskInputDescription] = useState("");

    const [isActiveBtnTaskCreate, setIsActiveBtnTaskCreate] = useState(false);
    const openCreateTaskForm = ()=>{
        setIsOpenCreateTaskForm(true);
    }
    const onChange = (e)=>{
        setIsActiveBtnTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);

    }
    const onChangeDescription = (e)=>{
        setTaskInputDescription(e.target.value);
    }
    const taskSubmit = (e)=>{
        e.preventDefault();
        console.log(taskInput, taskInputDescription);
        props.createTask(taskInput, taskInputDescription);
        setIsOpenCreateTaskForm(false);
        setIsActiveBtnTaskCreate(false);
        setTaskInput("");
        setTaskInputDescription("");

    }
    const taskReset = (e)=>{
        e.preventDefault();
        setIsOpenCreateTaskForm(false);
        setIsActiveBtnTaskCreate(false);
        setTaskInput("");
        setTaskInputDescription("");
    }

  return (

      <div class="container">
        <h1>Kanban </h1>

          {!isOpenCreateTaskForm &&
          <button className="btn btn-primary" onClick={openCreateTaskForm}>Create Task</button>}

        {isOpenCreateTaskForm &&

        <form>
          <div class="form-group">
            <label htmlFor="exampleInpu email1">Title</label>
            <input type="text" class="form-control" onChange={onChange} value={taskInput}/>
              <label htmlFor="exampleInpu email1">Description</label>
              <input type="text" className="form-control" onChange={onChangeDescription} value={taskInputDescription}/>
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
