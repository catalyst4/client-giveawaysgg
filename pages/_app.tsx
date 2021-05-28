import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import ReactGA from 'react-ga'

if(process.browser) {
  ReactGA.initialize('UA-197115196-1')
  ReactGA.pageview(window.location.pathname + window.location.search)  
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />  
    </Provider>
  )
}

export default MyApp