
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
)
