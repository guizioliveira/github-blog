import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Article } from './pages/article'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  )
}
