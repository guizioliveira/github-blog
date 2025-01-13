import Profile from '@/pages/home/components/profile'
import { Header } from '../../components/header'
import { Container, HeaderArticleSection, Posts } from './styles'
import PostCard from './components/post-card'
import SearchInput from './components/search-input'
import { Spacing } from '@/components/ui'

export default function Home() {
  const postData = {
    title: 'JavaScript data types and data structure',
    createdAt: '2025-01-11T21:26:43Z',
    summary: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean:`,
  }

  return (
    <>
      <Header />
      <Profile />
      <Container>
        <HeaderArticleSection>
          <h5>Articles</h5>
          <span>7 articles</span>
        </HeaderArticleSection>

        <Spacing apparence="s" />

        <SearchInput />

        <Posts>
          <PostCard {...postData} />
          <PostCard {...postData} />
          <PostCard {...postData} />
          <PostCard {...postData} />
          <PostCard {...postData} />
          <PostCard {...postData} />
          <PostCard {...postData} />
        </Posts>
      </Container>
    </>
  )
}
