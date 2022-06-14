import { ChangeEvent, useRef, useState } from "react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, checkAll, uncheckAll } from "../actions/index";
import { RootState } from "../store";
import Todo from "./Todo";
import Footer from "./Footer";
import { InitialDataState } from "../utils/models";

const Header: React.FC = memo(() => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState<string>("");
  const [isChecked, setisChecked] = useState<boolean>(false);
  // const ref = useRef(null);

  const { list, og } = useSelector(
    (state: RootState) => state.todoReducers as InitialDataState
  ); // HAVE TO ASK SIR
  // const og = useSelector((state: RootState) => state.todoReducers.og);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(inputData));
    setInputData("");
  };

  const renderFooter = () => {
    if (og.length > 0) return <Footer />; // list = {list}
  };

  function handleCheck(): void {
    setisChecked(!isChecked);
    if (isChecked === false) dispatch(checkAll());
    else dispatch(uncheckAll());
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

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
            onChange={handleInput}
          />
        </div>
      </form>
      <div>
        {list.map((elem) => {
          return <Todo key={elem.id} list={elem} />;
        })}
      </div>

      {renderFooter()}
    </div>
  );
});

export default Header;
