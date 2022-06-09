import React, { FormEvent, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/index";
import Todo from "./Todo";

const Header = memo(() => {
    const dispatch = useDispatch();
    const list = useSelector(
        (state: any) => state.todoReducers.list
    );
    const [inputData, setInputData]: any = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(inputData));
        setInputData("");
    };

    return (
        <div className="">
            <h1 className="text-9xl text-center text-my-red-500">
                todos
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="w-full h-full py-4 pl-14 pr-4 border-2 bg-white shadow-xl text-4xl mt-5 italic"
                    type="text"
                    name="name"
                    placeholder="What needs to be done?"
                    value={inputData}
                    onChange={(event) =>
                        setInputData(event.target.value)
                    }
                />
            </form>

            <ul>
                {list.map((elem) => {
                    return (
                        <Todo key={elem.id} list={elem} />
                    );
                })}
            </ul>
        </div>
    );
});

export default Header;
