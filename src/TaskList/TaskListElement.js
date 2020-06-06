import React from 'react';

const statuses = []


function TaskListElement(props) {
    const deleteTask = () => {
        props.deleteTask(props.el.id);
    }

    const elementPriorityIncrease = () => {
        props.elementPriorityIncrease(props.el.id);
    }
    const elementPriorityDecrease = () => {
        props.elementPriorityDecrease(props.el.id);
    }

    const statusIncrease = () => {
        props.statusIncrease(props.el.id)
    }

    const statusDecrease = () => {
        props.statusDecrease(props.el.id)
    }

    return (
        <div className="card shadow bg-white rounded">
            <div className="card-body">
                <h5 class="card-title">{props.el.name}
                    <button type="button" className="btn btn-sm float-right" onClick={deleteTask}>
                        <i class="fa fa-trash-o"></i>
                    </button>

                    <button type="button" className="btn btn-sm float-right" disabled={props.el.status === 3}>
                        <i className="fa fa-edit"></i>
                    </button>


                </h5>

                <p className="card-text">{props.el.description}</p>

                <div className="input-group">
                <span className=' btn  btn-sm' width="100%">
                    Priority: {
                    props.el.priority === 3 ? ' High' :
                        props.el.priority === 2 ? ' Medium' : ' Law  '

                }</span>
                    <div className="btn-group" role="group" aria-label="Basic example">

                        <button className="btn btn-sm float-left"
                                disabled={props.el.priority === 3 || props.el.status === 3}
                                onClick={elementPriorityIncrease}><i className="fa fa-arrow-up"></i></button>

                        <button className="btn btn-sm float-right"
                                disabled={props.el.priority === 1 || props.el.status === 3}
                                onClick={elementPriorityDecrease}><i className="fa fa-arrow-down"></i></button>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className="btn btn-sm " disabled={props.el.status === 0} onClick={statusDecrease}><i
                            className="fa fa-arrow-left"></i></button>

                        <button className="btn btn-sm " disabled={props.el.status === 3} onClick={statusIncrease}><i
                            className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskListElement;
