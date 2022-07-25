import { Props } from '@headlessui/react/dist/types'
import { GetStaticProps, NextPage } from 'next'
import Navigation from '../components/Navigation/Navigation'
import { prisma } from '../lib/prisma'
import Container from '../ui/Container'

interface LinkItem {
  id: number
  name: string
  route: string
}

interface Home {
  Links: LinkItem[]
}

const Home: NextPage<Home> = ({ Links }) => {
  return (
    <>
      <Navigation Links={Links}></Navigation>
      <Container className={'w-50'}>
        test
      </Container>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const Links: LinkItem[] = await prisma.navigation.findMany({
    where: {
      enabled: true,
    },
    select: {
      id: true,
      name: true,
      route: true,
    },
    orderBy: {
      position: 'asc',
    },
  })
  return {
    props: { Links },
  }
}
