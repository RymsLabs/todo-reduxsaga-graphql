import React, { memo, useState } from "react";
import { deleteTodo } from "../actions/index";
import cross from "../assets/closee.png";
import { useDispatch } from "react-redux";
import { markTodo, unmarkTodo, changeTodo } from "../actions/index";

type TodoProps = {
  list: {
    data: string;
    id: number;
    completed: boolean;
  };
};

const Todo = memo((props: TodoProps) => {
  const { list } = props;
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(list.data);
  const [completed, setCompleted] = useState(false);

  function toggleInput() {
    setToggle(false);
  }

  function handleBlur() {
    setToggle(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    dispatch(changeTodo(list.id, text));
  }

  function handleCheck() {
    setCompleted(!completed);
    if (completed === false) dispatch(markTodo(list.id, !completed));
    else dispatch(unmarkTodo(list.id, !completed));
  }

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <div className="grid grid-cols-[50px_550px_20px] relative shadow-xl bg-white p-5 box-border border-2 ">
          <div className="">
            <input
              className="w-7 h-7 focus:ring-1 bg-gray-100 border-r-indigo-500"
              type="checkbox"
              checked={list.completed}
              name={list.data}
              onChange={handleCheck}
            ></input>
          </div>
          <div>
            <label className="bg-white col-span-3 text-2xl italic">
              {list.completed ? (
                <p className=" transition-all delay-50 line-through decoration-4 font-medium text-mercury-600">
                  {text}
                </p>
              ) : toggle ? (
                <p className="font-medium" onDoubleClick={toggleInput}>
                  {text}
                </p>
              ) : (
                <input
                  className="italic font-medium text-xl"
                  type="text"
                  onBlur={handleBlur}
                  value={text}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>

          <div className="flex items-center">
            <img
              src={cross}
              alt="Cross Icon"
              className=" hover:cursor-pointer"
              onClick={() => dispatch(deleteTodo(list.id))}
            ></img>
          </div>
        </div>
      </ul>
    </div>
  );
});
export default Todo;
