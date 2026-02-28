import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
    </Provider>
  </StrictMode>,
)
