import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Store } from '../store/Store'
import '../components/raw.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={Store}><Component {...pageProps} /></Provider>
}

export default MyApp
