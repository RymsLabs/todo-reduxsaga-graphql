export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      completed: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const markTodo = (id, completed) => {
  //   console.log("in mark todo with id =", id);
  //   console.log("completed=", completed);
  return {
    type: "CHECK_TODO",
    payload: {
      id,
      completed,
    },
  };
};

export const unmarkTodo = (id, completed) => {
  console.log("in unmark todo with id =", id);
  console.log("completed=", completed);
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
