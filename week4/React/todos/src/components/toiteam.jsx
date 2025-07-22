import React from "react";

const TodoIteam = (props) => {
    return (

        <li className="Iteam-todo">
            <span>
                {props.completed? <></>:<input type="checkbox"/>}
                <span className="span">{props.text}</span>
              
            </span>
              <p>...</p>
        </li>

    )

};

export default TodoIteam;