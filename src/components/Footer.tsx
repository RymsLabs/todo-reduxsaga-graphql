import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { filterBtn } from "../utils/models";
import {
  CompletedTodo,
  AllTodo,
  ActiveTodo,
  ClearMarked,
} from "../actions/index";

const Footer = memo(() => {
  const count: number = useSelector(
    (state: RootState) => state.todoReducers.count
  );

  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(CompletedTodo());
  };

  const handleActive = () => {
    dispatch(ActiveTodo());
  };

  const handleAll = () => {
    dispatch(AllTodo());
  };

  const handleClear = () => {
    dispatch(ClearMarked());
  };

  const filterBtn = [
    {
      id: 1,
      title: "All",
      isActive: true,
      link: "",
    },
    {
      id: 2,
      title: "Active",
      isActive: false,
      link: "active",
    },
    {
      id: 3,
      title: "Completed",
      isActive: false,
      link: "completed",
    },
  ];

  const onFiltersClick = (title: string) => {
    switch (title) {
      case "All":
        handleAll();
        break;
      case "Active":
        handleActive();
        break;
      case "Completed":
        handleComplete();
        break;
    }
  };

  return (
    <footer className="text-center">
      <div className="grid grid-cols-[150px_350px_20px]  shadow-xl p-2 px-5 bg-white  box-border border-2 relative">
        <div className="flex gap-2 items-center">
          <strong className="">{count}</strong>
          <span className="">Items left</span>
        </div>

        <div className="flex gap-4 items-center">
          {filterBtn.map((btn) => {
            return (
              <ul key={btn.id}>
                <FilterBtn {...btn} onFiltersClick={onFiltersClick} />
              </ul>
            );
          })}
        </div>

        <div className="flex hover:underline w-28 items-center justify-end">
          <button className="" onClick={handleClear}>
            Clear Selection
          </button>
        </div>
      </div>
      <p className="mt-12 text-sm">Double-click to edit a todo</p>
      <p className="text-sm">Created by Manuj Bahety</p>
    </footer>
  );
});

const FilterBtn = memo((props: filterBtn) => {
  const { title, onFiltersClick, isActive } = props;

  return (
    <>
      <div className="border-1 p-1 text-center hover:cursor-pointer hover:ring ring-pink-100">
        <button
          className={`${isActive ? "selected" : ""}`}
          onClick={() => onFiltersClick(title)}
        >
          {title}
        </button>
      </div>
    </>
  );
});
export default Footer;
