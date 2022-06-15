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
  btnid: number;
  title: string;
  onFiltersClick: (title: string, btnid: number) => void;
  isActive: boolean;
};

type Filter = {
  id: number;
  title: string;
  link: string;
};

export type { ListItem, Action, TodoReducerState, filterBtn, Filter };
