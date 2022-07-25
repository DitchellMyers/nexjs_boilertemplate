import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Header: NextPage = () => {
  const router = useRouter()
  const title: String =
    router.pathname == '/' ? '| Home' : '| ' + router.pathname.replace('/', '')
  return (
    <Head>
      <title>Title {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header
