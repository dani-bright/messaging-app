import { ActionTypes } from './actions';
import { createUser, getUsers, postLogin, readSubject } from '@/api/user';
import { useEntitiesContext } from '@/contexts/EntitiesContext/EntitiesContext';
import { Actions, defaultFunctionParameter } from '@/helpers/helpers';
import Message from '@/models/Message';
import User from '@/models/User';
import * as React from 'react';
import { useContext } from 'react';

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }

  return undefined;
};

export interface StateInterface {
  connected: boolean;
  token: string;
  user?: User;
  users: User[];
}

export interface AppContextInterface {
  state: StateInterface;
  setToken: (token: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  fetchUsers: () => Promise<void>;
  register: (user: Partial<User>) => Promise<void>;
  readConversation: (userId: number, messageIds: number[]) => Promise<void>;
  updateUserMessages: (message: Message) => any;
}

export const initialState: StateInterface = {
  token: getLocalStorage('token') || '',
  connected: false,
  user: undefined,
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
        user: action.payload as User,
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
  register: Promise.reject,
  fetchUsers: defaultFunctionParameter,
  readConversation: Promise.reject,
  updateUserMessages: defaultFunctionParameter,
});
export const useCart = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

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

  const register = React.useCallback(async (user: Partial<User>) => {
    await createUser(user);
  }, []);

  const logout = React.useCallback(async () => {
    setToken('');
    setConnected(false);
    localStorage.clear();
    dispatch({ type: ActionTypes.RESET_STATE });
    resetState();
  }, [state.token]);

  const readConversation = React.useCallback(
    async (userId: number, messageIds: number[]) => {
      const user = await readSubject(state.token, userId, messageIds);
      dispatch({ type: ActionTypes.SET_USER, payload: user });
    },
    [state.token, state.user],
  );

  const fetchUsers = React.useCallback(async () => {
    const users = await getUsers(state.token);

    dispatch({ type: ActionTypes.SET_USERS, payload: users });
  }, [state.token]);

  const updateUserMessages = React.useCallback(
    async (message: Message) => {
      dispatch({
        type: ActionTypes.SET_USER,
        payload: {
          ...state.user,
          sentMessages:
            message.senderId !== state.user!.id
              ? [...state.user!.sentMessages]
              : [...state.user!.sentMessages, message],
          receivedMessages:
            message.senderId !== state.user!.id
              ? [...state.user!.receivedMessages, message]
              : [...state.user!.receivedMessages],
        },
      });
    },
    [state.token, state.user],
  );

  return (
    <AppContext.Provider
      value={{
        state,
        login,
        logout,
        setToken,
        fetchUsers,
        register,
        readConversation,
        updateUserMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppContext;
