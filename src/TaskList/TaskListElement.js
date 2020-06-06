import React, {useState} from 'react';


function TaskListElement(props) {


    return (
        <div className="card shadow bg-white rounded">
            <div className="card-body">
                <h5 class = "card-title">{props.el.name}</h5>
                <p className="card-text">{props.el.description}</p>

            </div>
        </div>
    );
}

export default TaskListElement;
