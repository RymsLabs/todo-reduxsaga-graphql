import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Filter, filterBtn } from "../utils/models";
import {
  CompletedTodo,
  AllTodo,
  ActiveTodo,
  ClearMarked,
} from "../actions/index";
import { filters } from "../utils/constants";

const Footer = memo(() => {
  const dispatch = useDispatch();
  const count: number = useSelector(
    (state: RootState) => state.todoReducers.count
  );
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

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

  const activateButton = (btnid: number) => {
    filters.map((btn) => {
      if (btn.id === btnid) {
        setActiveFilter(btn);
      }
    });
  };

  const onFiltersClick = (title: string, btnid: number) => {
    switch (title) {
      case "All":
        activateButton(btnid);
        handleAll();
        break;
      case "Active":
        activateButton(btnid);
        handleActive();
        break;
      case "Completed":
        activateButton(btnid);
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
          {filters.map((btn) => {
            const { title, id } = btn;
            return (
              <FilterBtn
                key={id}
                title={title}
                btnid={id}
                isActive={id === activeFilter.id}
                onFiltersClick={onFiltersClick}
              />
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
  const { title, onFiltersClick, isActive, btnid } = props;

  return (
    <button
      className={`p-1 ${
        isActive ? " ring-2 ring-pink-200 " : " hover:ring-1 ring-pink-200"
      }`}
      onClick={() => onFiltersClick(title, btnid)}
    >
      {title}
    </button>
  );
});
export default Footer;
