import React from 'react'
import Layout from "@/src/components/layouts";
import { GET_MENUS } from "@/src/queries/get-menus";
import client from "@/src/apollo/client";
import Tourdetails from '@/src/components/tour-details/Tourdetails';


function adventures({data}) {
  return (
    <div>
       <Layout data={data}>
       <div className=" ">
           <Tourdetails />
        </div>
        
        </Layout>
            
    </div>
  )
}


export default adventures
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