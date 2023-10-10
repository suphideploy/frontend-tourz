//import '@/styles/globals.css'
import client from '@/src/apollo/client';
import '../src/styles/index.scss'
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
 
     <Component {...pageProps} />
     
  </ApolloProvider>
 )
}
