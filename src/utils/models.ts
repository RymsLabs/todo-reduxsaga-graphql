type IResource = {
  // rename to Item
  id: number;
  data: string;
  completed: boolean;
};
type IAction = {
  //rename to action
  type: string;
  payload: {
    id: number;
    completed: boolean;
    text: string;
  };
};

type InitialDataState = {
  // rename to todoreducerstate
  list: IResource[];
  og: IResource[];
  count: number;
};

export type { IResource, IAction, InitialDataState };
