import React, {useState} from 'react';

const btnStylePriority = ['btn btn-sm btn-success', 'btn btn-sm btn-warning','btn btn-sm btn-danger']

const priorities = ['Low', 'Medium', 'High']

const editTask = (<svg className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>);

const arrowLeft = (
    <svg className="bi bi-arrow-left-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd"
              d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
        <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
    </svg>

);
const arrowRight = (
    <svg className="bi bi-arrow-right-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill-rule="evenodd"
              d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
    </svg>

);

const deleteTask1 = (    <svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>);


function TaskListElement(props) {

    const [editMode, setEditMode] = useState(false);


    const deleteTask = () => {
        props.deleteTask(props.el.id);
    }


    const onPriorityChanged = (e) => {
        console.log(e.target.value);
        //setPriority(e.target.value);
        props.changePriority(e.target.value, props.el.id);

    }
    const statusIncrease = () => {
        props.statusIncrease(props.el.id)
    }

    const statusDecrease = () => {
        props.statusDecrease(props.el.id)
    }

    return (
        <div className="card shadow bg-white rounded">
            <div className="card-header">
                <div>{props.el.name}
                    <button type="button" className="btn btn-sm float-right" onClick={deleteTask}>
                        {/*<i class="fa fa-trash-o"></i>*/}
                        {deleteTask1}
                    </button>

                    <button type="button" className="btn btn-sm float-right" disabled={props.el.status === 3}>
                        {/*<i className="fa fa-edit"></i>*/}
                        {editTask}
                    </button>


                </div>
            </div>
            <div className="card-body">

                <p className="card-text">{props.el.description}</p>





                <select width = "300px" class={btnStylePriority[props.el.priority]} name="priorities" id="priorities" onChange={onPriorityChanged} value={priorities[props.el.priority]}>
                    <option  width = "300px" class="btn btn-sm btn-danger" value="High">High</option>
                    <option  width = "300px" class="btn btn-sm  btn-success" value="Medium">Medium</option>
                    <option  width = "300px" class="btn btn-sm btn-warning" value="Low">Low</option>

                </select>


                <button className="btn btn-sm float-left" disabled={props.el.status === 'Todo'} onClick={statusDecrease}>
                    {/*<i className="fa fa-arrow-left"></i>*/}
                    {arrowLeft}
                    </button>

                <button className="btn btn-sm  float-right" disabled={props.el.status === 'Done'} onClick={statusIncrease}>
                    {/*<i className="fa fa-arrow-right"></i>*/}
                    {arrowRight}
                </button>

            </div>

        </div>
    );
}

export default TaskListElement;
