import { FunctionComponent } from 'react'
import Container from '../../ui/Container'

interface LinkItem {
  id: number
  name: string
  route: string
}

type Navigation = {
  Links: LinkItem[]
}

const Navigation: FunctionComponent<Navigation> = ({ Links }) => {
  return (
    <Container center={true}>
      {Links.map((link) => (
        <Container className='border-blue-700 border-2 p-2 m-2' color={{ base: 'text-black', sm: 'text-pink-300', lg: 'text-blue-400' }} key={link.id}>{link.name}</Container>
      ))}
    </Container>
  )
}

export default Navigation
