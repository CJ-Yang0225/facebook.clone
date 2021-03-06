import React, {
  createContext,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from "react";

enum ActionType {
  SET_USER = "SET_USER",
}

type State = {
  user: object | null;
};

type Action = {
  type: ActionType;
  user: State;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

const initialState = { user: null };

type Props = {
  children: ReactNode;
};

export const UserContext = createContext<any>([]);

const ContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, { user: null })}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
export const useUserContext = () => useContext(UserContext);
