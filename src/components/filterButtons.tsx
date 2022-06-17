import { memo } from "react";
import { Filter } from "../utils/models";

type FilterButton = {
  button: Filter;
  onFiltersClick: (button: Filter) => void;
  isActive: boolean;
};

const FilterButtons = memo((props: FilterButton) => {
  const { onFiltersClick, isActive, button } = props;
  const { title } = button;

  return (
    <button
      className={`p-1 ${
        isActive ? " ring-2 ring-pink-200 " : " hover:ring-1 ring-pink-200"
      }`}
      onClick={() => onFiltersClick(button)}
    >
      {title}
    </button>
  );
});

export default FilterButtons;
