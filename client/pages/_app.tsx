import '../styles/globals.css'
import { AppProvider, AppReducer, initialState } from '../contexts/AppContext/AppContext';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (

    <AppProvider>
        <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
