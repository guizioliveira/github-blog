import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Article } from './pages/article'
import { DefaultLayout } from './layouts/default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
      </Route>
    </Routes>
  )
}
