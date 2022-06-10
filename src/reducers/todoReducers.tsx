const initialData: any = {
  list: [],
  og: [],
  count: 0,
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "CHECK_ALL":
      state.list.map((item) => {
        item.completed = true;
      });

      state.og.map((item) => {
        item.completed = true;
      });
      return {
        ...state,
        count: state.count,
      };

    case "UNCHECK_ALL":
      state.list.map((item) => {
        item.completed = false;
      });

      state.og.map((item) => {
        item.completed = false;
      });
      return {
        ...state,
        count: state.count,
      };

    case "ADD_TODO":
      const { id, data, completed }: any = action.payload;

      ++state.count;

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
        count: state.count,
      };

    case "DELETE_TODO":
      state.count = 0;
      const newList = state.list.filter((element) => element.id !== action.id);

      const ogUpdateList = state.og.filter(
        (element) => element.id !== action.id
      );
      newList.map((item) => {
        if (item.completed === false) ++state.count;
      });

      return {
        ...state,
        list: newList,
        og: ogUpdateList,
        count: state.count,
      };

    case "CHANGE_TODO":
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
    case "CHECK_TODO":
      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = true;
        }
      });

      state.count = 0;
      state.list.map((item) => {
        if (item.completed === false) state.count++;
      });

      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = true;
        }
      });
      return {
        ...state,
        count: state.count,
      };

    case "UNCHECK_TODO":
      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });

      state.count = 0;
      state.list.map((item) => {
        if (item.completed === false) state.count++;
      });
      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });

      return {
        ...state,
        count: state.count,
      };

    case "CLEAR_TODO":
      const clearedList = state.list.filter(
        (element) => element.completed === false
      );
      const clearedOGList = state.og.filter(
        (element) => element.completed === false
      );
      state.count = 0;
      state.og.map((item) => {
        if (item.completed === false) state.count++;
      });
      return {
        ...state,
        list: clearedList,
        og: clearedOGList,
        count: state.count,
      };

    case "SHOW_ALL":
      console.log("In All Section");
      console.log("List All =", state);
      const ogSHowAll = state.og.filter(
        (element) => element.completed === true || element.completed === false
      );

      state.count = 0;
      state.list.map((item) => {
        if (item.completed === false) state.count++;
      });

      return {
        ...state,
        list: ogSHowAll,
        count: state.count,
      };

    case "COMPLETED_TODO":
      console.log("In Completed Section");
      console.log("List after completed =", state);
      const completedList = state.og.filter(
        (element) => element.completed === true
      );
      state.count = state.og.length - completedList.length;

      return {
        ...state,
        list: completedList,
        count: state.count,
      };

    case "ACTIVE_TODO":
      console.log("In Active Section");
      console.log("List =", state);
      const activeList = state.og.filter(
        (element) => element.completed === false
      );
      state.count = state.og.length - activeList.length;
      return {
        ...state,
        list: activeList,
        // count: 0,
        count: activeList.length,
      };

    default:
      return state;
  }
};

export default todoReducers;
