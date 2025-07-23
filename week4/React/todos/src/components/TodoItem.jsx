import React from "react";

const TodoIteam = ({ text, onDelete }) => {
    return (

        <li className="Iteam-todo">
            <div className="todo-item">
                <span>{text}</span>
            </div>
             <button onClick={onDelete} className="delete-btn">Delete</button>
        </li>

    )

};

export default TodoIteam;