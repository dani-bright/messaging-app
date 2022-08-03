import React, { useCallback } from 'react';
import { Actions, defaultFunctionParameter, mergeDeep } from '../../helpers/helpers';
import Message from '../../models/Message';
import User from '../../models/User';
import { normalize } from 'normalizr';


import { ActionTypes } from './actions';
import { Schemas } from '../../schemas';

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
    case ActionTypes.ADD_ENTITIES: {
      return {
        ...state,
        entities: mergeDeep(
          {},
          state.entities,
          action.payload && action.schema
            ? normalize(action.payload, action.schema).entities
            : {},
        ) as StateInterface['entities'],
      };
    }
    case ActionTypes.ADD_REFERENCES: {
      return {
        ...state,
        references: action.payload,
      };
    }
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
  addEntities: (schema: Schemas, data: any) => void;
  resetState: () => void;
}

export const EntitiesContext = React.createContext<EntitiesContextInterface>({
  state: initialState,
  addEntities: defaultFunctionParameter,
  resetState: defaultFunctionParameter,
});

export const EntitiesProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(EntitiesReducer, initialState);

  const resetState = useCallback(() => {
    dispatch({ type: ActionTypes.RESET_STATE });
  }, []);

  const addEntities = useCallback((schema: Schemas, payload: any) => {
    dispatch({
      type: ActionTypes.ADD_ENTITIES,
      payload,
      schema,
    });
  }, []);



  return (
    <EntitiesContext.Provider
      value={{
        state,
        addEntities,
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
