import { ActionTypes } from './actions';
import { Actions, defaultFunctionParameter } from '@/helpers/helpers';
import Message from '@/models/Message';
import User from '@/models/User';
import React, { useCallback } from 'react';

type Collection<T> = Record<number | string, T>;

export interface StateInterface {
  entities: {
    users: Collection<User>;
    messages: Collection<Message>;
  };
}

export const EntitiesReducer = (
  state: StateInterface,
  action: Actions<typeof ActionTypes[keyof typeof ActionTypes]>,
) => {
  switch (action.type) {
    case ActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export const initialState: StateInterface = {
  entities: {
    users: {},
    messages: {},
  },
};

export interface EntitiesContextInterface {
  state: StateInterface;
  resetState: () => void;
}

export const EntitiesContext = React.createContext<EntitiesContextInterface>({
  state: initialState,
  resetState: defaultFunctionParameter,
});

export const EntitiesProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(EntitiesReducer, initialState);

  const resetState = useCallback(() => {
    dispatch({ type: ActionTypes.RESET_STATE });
  }, []);

  return (
    <EntitiesContext.Provider
      value={{
        state,
        resetState,
      }}
    >
      {children}
    </EntitiesContext.Provider>
  );
};

export const useEntitiesContext = () => {
  return React.useContext(EntitiesContext);
};

export const useEntities = () => useEntitiesContext().state.entities;

export default EntitiesContext;
