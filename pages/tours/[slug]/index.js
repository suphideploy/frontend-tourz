import React from 'react';
import TourSingle from '@/src/components/toursingle';
import Layout from "@/src/components/layouts";
import { GET_MENUS } from "@/src/queries/get-menus";
import client from "@/src/apollo/client";

function single({data}) {
  return (

    <div>
       <Layout data={data}>
       <div className=" ">
           <TourSingle />
        </div>
        
        </Layout>
            
    </div>
  )
}

export default single

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
