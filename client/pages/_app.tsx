import '../styles/globals.css'
import { Menu} from "../components/Menu";
import { AppProvider } from '../contexts/AppContext/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <>
        <Menu/>
        <Component {...pageProps} />
      </>
    </AppProvider>
  )
}

export default MyApp
