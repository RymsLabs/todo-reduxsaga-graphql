type ListItem = {
  // rename to Item
  id: number;
  data: string;
  completed: boolean;
};
type Action = {
  type: string;
  payload: {
    id: number;
    completed: boolean;
    text: string;
  };
};

type TodoReducerState = {
  list: ListItem[];
  og: ListItem[];
  count: number;
};

type filterBtn = {
  title: string;
  onFiltersClick: (title: string) => void;
  isActive: boolean;
};
export type { ListItem, Action, TodoReducerState, filterBtn };
