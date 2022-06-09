const initialData = {
  list: [
    {
      id: "1",
      data: "task1",
      completed: false,
    },
  ],
  og: [
    {
      id: "1",
      data: "task1",
      completed: false,
    },
  ],
  count: 0,
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "CHANGE_TODO":
      console.log("In CHange todo=", action.payload.text);
      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.data = action.payload.text;
        }
      });

      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.data = action.payload.text;
        }
      });

      return {
        ...state,
      };

    case "ADD_TODO":
      const { id, data, completed } = action.payload;
      const counter = state.count + 1;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            completed: completed,
          },
        ],
        og: [
          ...state.og,
          {
            id: id,
            data: data,
            completed: completed,
          },
        ],
        count: counter,
      };

    case "DELETE_TODO":
      console.log("In Delete Section");
      console.log("OG=", state.og);
      console.log("List after deleted =", state);
      const newList = state.list.filter((elem) => elem.id !== action.id);
      const ogUpdateList = state.og.filter((elem) => elem.id !== action.id);
      // const counter = state.count
      return {
        ...state,
        list: newList,
        og: ogUpdateList,
      };

    case "CHECK_TODO":
      console.log("In Check todo Section");
      //   console.log(action.payload);
      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = true;
        }
      });

      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = true;
        }
      });
      return {
        ...state,
      };

    case "UNCHECK_TODO":
      console.log("In UNCheck todo Section");
      //   console.log(action.payload);
      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });
      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });
      return {
        ...state,
      };

    case "CLEAR_TODO":
      const clearedList = state.list.filter((elem) => elem.completed === false);
      const clearedOGList = state.og.filter((elem) => elem.completed === false);
      return {
        ...state,
        list: clearedList,
        og: clearedOGList,
      };

    case "SHOW_ALL":
      console.log("In All Section");
      console.log("List All =", state);
      const ogSHowAll = state.og.filter(
        (elem) => elem.completed === true || elem.completed === false
      );

      return {
        ...state,
        list: ogSHowAll,
      };

    case "COMPLETED_TODO":
      console.log("In Completed Section");
      console.log("List after completed =", state);
      const completedList = state.og.filter((elem) => elem.completed === true);
      return {
        ...state,
        list: completedList,
      };

    case "ACTIVE_TODO":
      console.log("In Active Section");
      console.log("List =", state);
      const activeList = state.og.filter((elem) => elem.completed === false);
      return {
        ...state,
        list: activeList,
      };

    default:
      return state;
  }
};

export default todoReducers;
