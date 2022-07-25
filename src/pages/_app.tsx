import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'
import Head from '../components/Head/Head'
import Footer from '../components/Footer/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Head></Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </ApolloProvider>
  )
}

export default MyApp
