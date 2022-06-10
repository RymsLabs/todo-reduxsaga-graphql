import { useState } from "react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, checkAll, uncheckAll } from "../actions/index";
import Todo from "./Todo";
import Footer from "./Footer";

const Header = memo(() => {
  const dispatch = useDispatch();
  const [inputData, setInputData]: any = useState("");
  const [isChecked, setisChecked] = useState(false);

  const list = useSelector((state: any) => state.todoReducers.list);
  const og = useSelector((state: any) => state.todoReducers.og);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputData));
    setInputData("");
  };

  const renderFooter = () => {
    if (og.length > 0) return <Footer key={list.id} list={list} />;
  };
  function handleCheck() {
    setisChecked(!isChecked);
    if (isChecked === false) dispatch(checkAll());
    else dispatch(uncheckAll());
  }

  return (
    <div className="">
      <h1 className="text-9xl text-center text-myred-500">todos</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full h-full px-5 gap-5 flex  border-2 bg-white shadow-xl py-5 mt-5">
          <input
            className="w-7 h-7"
            type="checkbox"
            name="selectAll"
            onChange={handleCheck}
          ></input>
          <input
            className="w-[600px] text-3xl  italic"
            type="text"
            name="name"
            placeholder="What needs to be done?"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
        </div>
      </form>
      <div>
        {list.map((elem) => {
          return (
            <div>
              <Todo key={elem.id} list={elem} />
            </div>
          );
        })}
      </div>
      {renderFooter()}
    </div>
  );
});

export default Header;
