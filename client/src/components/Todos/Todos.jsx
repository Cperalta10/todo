import React from "react";
import todosData from "../../data/todosData";
import "./Todos.css";

const Todos = () => {
    return (
        <div className="todos box">
            <h1
                style={{
                    textAlign: "center",
                    paddingBottom: "1rem",
                    fontSize: "3rem",
                }}
            >
                Todo List
            </h1>
            {todosData.map((todo) => {
                return (
                    <div className="todo">
                        <h2>{todo}</h2>
                        <p>completed</p>
                        <p>edit</p>
                        <p>delete</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;
