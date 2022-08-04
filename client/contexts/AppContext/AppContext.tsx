import * as React from 'react';
import { FC, useContext, useState } from 'react';
import { createUser, postLogin } from '../../api/user';
import { Actions, defaultFunctionParameter } from '../../helpers/helpers';
import User from '../../models/User';
import { userSchema } from '../../schemas';
import { useEntitiesContext } from '../EntitiesContext/EntitiesContext';
import { ActionTypes } from './actions';
import { usePersistedContext } from 'react-persist-context'


const setLocalStorage = (key, value) =>{
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value)
  }
}

const getLocalStorage = (key) =>{
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }

  return undefined
}

export interface ICartProvider {
    setCartUuid : (id:string) => void;
    uuid? :string;
}

export interface StateInterface {
  connected: boolean;
  token: string;
  user: User;
}

export interface AppContextInterface {
  state: StateInterface;
  setToken: (token: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  fetchUser: () => void;
  postMessage: (id: number) => Promise<void>;
  register: (user:Partial<User>) => Promise<void>;
}

export const initialState: StateInterface = {
  token: getLocalStorage("token") || '',
  connected: false,
  user: null,
};

export const AppReducer = (
  state: StateInterface,
  action: Actions<typeof ActionTypes[keyof typeof ActionTypes]>,
) => {
  switch (action.type) {
    case ActionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case ActionTypes.SET_CONNECTED: {
      return {
        ...state,
        connected: action.payload,
      };
    }
 
    case ActionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionTypes.RESET_STATE: {
      return { ...initialState, token: '' };
    }
    default:
      return state;
  }
};

export const AppContext = React.createContext<AppContextInterface>({
state: initialState,
  setToken: defaultFunctionParameter,
  login: defaultFunctionParameter,
  logout: defaultFunctionParameter,
  postMessage: Promise.reject,
  register: Promise.reject,
  fetchUser: defaultFunctionParameter,
});
export const useCart = () => useContext(AppContext);

export const AppProvider  = ({ children }: { children: JSX.Element }) => {
  const { state, dispatch} = usePersistedContext();

  const { addEntities, resetState } = useEntitiesContext();

  const setConnected = React.useCallback((connected: boolean) => {
    dispatch({ type: ActionTypes.SET_CONNECTED, payload: connected });
  }, []);

  const setToken = React.useCallback((value: string) => {
    localStorage.setItem('token', value);
    dispatch({ type: ActionTypes.SET_TOKEN, payload: value });
  }, []);


  const login = React.useCallback(async (email: string, password: string) => {
    const loggedUser = await postLogin(email, password);
    setToken(loggedUser.token);
    dispatch({ type: ActionTypes.SET_USER, payload: loggedUser });

    setConnected(true);
    addEntities(userSchema, loggedUser);
  }, []);

  const register = React.useCallback(async (user:Partial<User>) => {
    await createUser(user);

  }, []);

  const logout = React.useCallback(async () => {
    setToken('');
    setConnected(false);
    localStorage.clear();
    dispatch({ type: ActionTypes.RESET_STATE });
    resetState();
  }, [state.token]);


  const sendMessage = React.useCallback(async () => {

  }, []);

  const fetchUser = React.useCallback(async () => {
    // const profile = await getContact(state.token);

    // addEntities(contact, profile);
    // dispatch({ type: ActionTypes.SET_CONTACT, payload: profile.id });
  }, [state.token]);

    return (
        <AppContext.Provider value={{
            state,
            login,
            logout,
            setToken,
            fetchUser,
        postMessage: sendMessage,
            register
        }}>
        {children}
        </AppContext.Provider>
    );

};


export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppContext;