import React from "react"
import Layout from "@/src/components/layouts";
import { GET_MENUS } from "@/src/queries/get-menus";
import { ApolloProvider } from "@apollo/client";
import client from "@/src/apollo/client";


export default function About( {data}) {
    return (
        <Layout data={data}>
            <div>About Us</div>
        </Layout>
            
       
       
    )
}
export async function getStaticProps(context){
    const {data, loadng, networkStatus} = await client.query({
  
      query: GET_MENUS
    });
  
    console.warn('data', data);
  
    return {
            props: {
              data: {
                menus: {
                  headerMenus: data?.headerMenus?.edges,
                  footerMenus: data?.footerMenus?.edges
            }
        }
           
      }
    }
  
  }