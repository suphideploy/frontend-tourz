import '../src/styles/slickslider.module.css';
import client from '@/src/apollo/client';
import '../src/styles/index.scss'
import { ApolloProvider } from "@apollo/client";
import Layout from "@/src/components/layouts";
import { GET_MENUS } from "@/src/queries/get-menus";

export default function App({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
 
     <Component {...pageProps} />
     
  </ApolloProvider>
 )
}
