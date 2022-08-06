import * as React from 'react';
import { FC, useContext, useState } from 'react';
import { createUser, getUsers, postLogin, readSubject } from '../../api/user';
import { Actions, defaultFunctionParameter } from '../../helpers/helpers';
import User from '../../models/User';
import { userSchema } from '../../schemas';
import { useEntitiesContext } from '../EntitiesContext/EntitiesContext';
import { ActionTypes } from './actions';
import Message from '../../models/Message';
import { createMessage } from '../../api/message';


export const getLocalStorage = (key) =>{
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
  users: User[];
}

export interface AppContextInterface {
  state: StateInterface;
  setToken: (token: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  fetchUsers: () => Promise<void>;
  sendMessage: (message:Partial<Message>) => Promise<Message>;
  register: (user: Partial<User>) => Promise<void>;
  readConversation :(userId, messageIds:number[])=> Promise<void>
}

export const initialState: StateInterface = {
  token: getLocalStorage("token") || '',
  connected: false,
  user: null,
  users: [],
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
      
    case ActionTypes.SET_USERS: {
      return {
        ...state,
        users: action.payload,
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
  sendMessage: Promise.reject,
  register: Promise.reject,
  fetchUsers: defaultFunctionParameter,
  readConversation: Promise.reject,
});
export const useCart = () => useContext(AppContext);

export const AppProvider  = ({ children }: { children: JSX.Element }) => {
  const [ state, dispatch] = React.useReducer(AppReducer, initialState);

  const { resetState } = useEntitiesContext();

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


  const sendMessage = React.useCallback(async (message:Partial<Message>) => {
    const createdMessage = await createMessage(state.token, message);
    dispatch({ type: ActionTypes.SET_USER, payload: {...state.user, sentMessages: [...state.user.sentMessages, createdMessage] } });

    return createdMessage;
  }, [state.token, state.user]);

  const readConversation = React.useCallback(async (userId:number, messageIds:number[]) => {
    const user = await readSubject(state.token, userId, messageIds);
    dispatch({ type: ActionTypes.SET_USER, payload: user });

  }, [state.token, state.user]);

  const fetchUsers = React.useCallback(async () => {
    const users = await getUsers(state.token);

    dispatch({ type: ActionTypes.SET_USERS, payload: users });
  }, [state.token]);

    return (
        <AppContext.Provider value={{
            state,
            login,
            logout,
            setToken,
            fetchUsers,
            sendMessage,
            register,
            readConversation
        }}>
        {children}
        </AppContext.Provider>
    );

};


export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppContext;