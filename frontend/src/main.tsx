
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { persistor, store } from './store/authStore.ts'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </PersistGate>
  </Provider>,
)
