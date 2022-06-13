import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  CompletedTodo,
  AllTodo,
  ActiveTodo,
  ClearMarked,
} from "../actions/index";

type FooterProps = {
  list: {
    data: string;
    id: number;
    completed: boolean;
  };
};
const Footer = memo((props: FooterProps) => {
  const count: number = useSelector(
    (state: RootState) => state.todoReducers.count
  );
  const { list } = props;

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
      // onCLick: handleAll,
      link: "",
    },
    {
      id: 2,
      title: "Active",
      isActive: false,
      // onCLick: handleActive,
      link: "active",
    },
    {
      id: 3,
      title: "Completed",
      isActive: false,
      // onCLick: () => handleComplete(),
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

  console.log("IN footer", list);
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
type filterBtn = {
  title: string;
  onFiltersClick: (title: string) => void;
  isActive: boolean;
};
const FilterBtn = memo((props: filterBtn) => {
  const { title, onFiltersClick, isActive } = props;
  // console.log(props);

  return (
    <>
      <div className="border-1 p-1 text-center hover:cursor-pointer hover:ring ring-pink-100">
        <button
          // href={`/${link}`}
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
