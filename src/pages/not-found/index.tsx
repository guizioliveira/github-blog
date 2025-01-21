import { useNavigate } from 'react-router-dom'
import { Button, Container, Content, Vignette } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <Container>
      <Vignette />
      <Content>
        <h1>
          404 <span>page not found</span>
        </h1>
        <p>Look like you&apos;re lost..</p>
        <Button onClick={() => navigate('/')}>Go back home</Button>
      </Content>
    </Container>
  )
}
