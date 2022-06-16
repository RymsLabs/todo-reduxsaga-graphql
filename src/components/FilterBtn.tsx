import { memo } from "react";
import { filterBtn } from "../utils/models";

const FilterBtn = memo((props: filterBtn) => {
  const { title, onFiltersClick, isActive, btnId } = props;

  return (
    <button
      className={`p-1 ${
        isActive ? " ring-2 ring-pink-200 " : " hover:ring-1 ring-pink-200"
      }`}
      onClick={() => onFiltersClick(title, btnId)}
    >
      {title}
    </button>
  );
});

export default FilterBtn;
