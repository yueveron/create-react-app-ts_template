type TState = {
  selectedIndex: number;
};
type TAction =
  | { type: 'arrowUp'; payload?: TState }
  | { type: 'select'; payload?: TState };

export const initialState: TState = { selectedIndex: 0 };
export const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'arrowUp':
      return { selectedIndex: 1 };
    case 'select':
      return { selectedIndex: 3 };
    default:
      throw new Error();
  }
};
