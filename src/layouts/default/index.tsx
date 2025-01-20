import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import { Container } from './styled'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
