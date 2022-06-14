export const changeTodo = (id: number, text: string) => {
  return {
    type: "CHANGE_TODO",
    payload: {
      id,
      text,
    },
  };
};

export const checkAll = () => {
  return {
    type: "CHECK_ALL",
  };
};

export const uncheckAll = () => {
  return {
    type: "UNCHECK_ALL",
  };
};

export const addTodo = (data: string) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      text: data,
      completed: false,
    },
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

export const markTodo = (id: number, completed: boolean) => {
  return {
    type: "CHECK_TODO",
    payload: {
      id,
      completed,
    },
  };
};

export const unmarkTodo = (id: number, completed: boolean) => {
  return {
    type: "UNCHECK_TODO",
    payload: {
      id,
      completed,
    },
  };
};

export const ClearMarked = () => {
  return {
    type: "CLEAR_TODO",
  };
};

export const AllTodo = () => {
  return {
    type: "SHOW_ALL",
  };
};

export const CompletedTodo = () => {
  return {
    type: "COMPLETED_TODO",
    completed: true,
  };
};

export const ActiveTodo = () => {
  return {
    type: "ACTIVE_TODO",
    completed: false,
  };
};
