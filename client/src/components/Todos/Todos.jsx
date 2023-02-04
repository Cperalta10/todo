import React from "react";
import todosData from "../../data/todosData";
import "./Todos.css";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todos = () => {
    const updateMode = () => {
        console.log("hi");
    };

    const deleteTodo = () => {
        console.log("hi");
    };

    return (
        <div className="todos box scroll">
            <h1
                style={{
                    textAlign: "center",
                    paddingBottom: "1rem",
                    fontSize: "3rem",
                }}
            >
                Todo List
            </h1>
            <div className="addTodo">
                <input type="text" placeholder="Add a todo..." />
                <button className="add">Add</button>
            </div>
            {todosData.map((todo) => {
                return (
                    <div className="todo">
                        <div className="text">{todo}</div>
                        <div className="icons">
                            <BiEdit className="icon" onClick={updateMode} />
                            <AiFillDelete
                                className="icon"
                                onClick={deleteTodo}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;
