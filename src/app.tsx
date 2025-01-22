import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const queryCLient = new QueryClient()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Github blog" />
        <BrowserRouter>
          <QueryClientProvider client={queryCLient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  )
}
