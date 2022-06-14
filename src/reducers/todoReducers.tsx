import { Action, TodoReducerState } from "../utils/models";

const initialData: TodoReducerState = {
  list: [],
  og: [],
  count: 0,
};

const todoReducers = (state = initialData, action: Action) => {
  let count = state.count;

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
      const { id, text, completed } = action.payload;

      ++count;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: text,
            completed: completed,
          },
        ],
        og: [
          ...state.og,
          {
            id: id,
            data: text,
            completed: completed,
          },
        ],
        count: count,
      };

    case "DELETE_TODO":
      count = 0;
      const newList = state.list.filter(
        (element) => element.id !== action.payload.id
      );

      const ogUpdateList = state.og.filter(
        (element) => element.id !== action.payload.id
      );

      newList.map((item) => {
        if (item.completed === false) ++count;
      });

      return {
        ...state,
        list: newList,
        og: ogUpdateList,
        count: count,
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
      count = 0;
      let tempState = state.list;
      let tempOGState = state.list;
      tempState = tempState.map((item) => {
        let tempItem = item;
        if (action.payload.id === tempItem.id) {
          tempItem["completed"] = true;
        }
        return tempItem;
      });
      console.log(tempState);

      tempState.map((item) => {
        if (item.completed === false) count++;
      });

      tempOGState = tempOGState.map((item) => {
        let tempItem = item;
        if (action.payload.id === tempItem.id) {
          // tempItem.completed = true;
        }
        return tempItem;
      });

      return {
        ...state,
        // list: tempState,
        // state: copystate,
        count: 0,
      };

    case "UNCHECK_TODO":
      count = 0;

      state.list.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });

      state.list.map((item) => {
        if (item.completed === false) count++;
      });
      state.og.map((item) => {
        if (action.payload.id === item.id) {
          item.completed = false;
        }
      });

      return {
        ...state,
        count: count,
      };

    case "CLEAR_TODO":
      count = 0;

      const clearedList = state.list.filter(
        (element) => element.completed === false
      );

      const clearedOGList = state.og.filter(
        (element) => element.completed === false
      );

      state.og.map((item) => {
        if (item.completed === false) count++;
      });

      return {
        ...state,
        list: clearedList,
        og: clearedOGList,
        count: count,
      };

    case "SHOW_ALL":
      count = 0;

      const ogSHowAll = state.og.filter(
        (element) => element.completed === true || element.completed === false
      );

      state.list.map((item) => {
        if (item.completed === false) count++;
      });

      return {
        ...state,
        list: ogSHowAll,
        count: count,
      };

    case "COMPLETED_TODO":
      const completedList = state.og.filter(
        (element) => element.completed === true
      );
      count = state.og.length - completedList.length;

      return {
        ...state,
        list: completedList,
        count: count,
      };

    case "ACTIVE_TODO":
      const activeList = state.og.filter(
        (element) => element.completed === false
      );
      count = state.og.length - activeList.length;
      return {
        ...state,
        list: activeList,

        count: activeList.length,
      };

    default:
      return state;
  }
};

export default todoReducers;
