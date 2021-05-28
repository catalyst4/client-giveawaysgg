import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MSTGR9M'
}

if(process.browser) {
  TagManager.initialize(tagManagerArgs)
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />  
    </Provider>
  )
}

export default MyApp