import '../styles/globals.css'
import { Menu} from "../components/Menu";
import { AppProvider, AppReducer, initialState } from '../contexts/AppContext/AppContext';
import { PersistentContextProvider } from 'react-persist-context'
import { Header } from '../components/Header';

const store = {
    state: initialState,
    reducer: AppReducer
}

function MyApp({ Component, pageProps }) {
  return (
        <PersistentContextProvider store={store}>

    <AppProvider>
      <>
        <Header/>
        <Component {...pageProps} />
      </>
      </AppProvider>
      </PersistentContextProvider>
  )
}

export default MyApp
