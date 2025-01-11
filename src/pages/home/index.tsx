import Profile from '@/components/profile'
import { Header } from '../../components/header'
import { Container, Posts } from './styles'
import PostCard from './components/post-card'

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <Container>
        <Posts>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Posts>
      </Container>
    </>
  )
}
