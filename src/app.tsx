import { ThemeProvider } from 'styled-components'
import Home from '@/pages/home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCLient = new QueryClient()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryCLient}>
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
