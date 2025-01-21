import { Container, Vignette } from './styles'

export function NotFound() {
  return (
    <Container>
      <Vignette />
      <h1>
        404 <span>page not found</span>
      </h1>
      <p>Look like you&apos;re lost..</p>
    </Container>
  )
}
