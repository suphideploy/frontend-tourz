//import Image from 'next/image'
//import { Inter } from 'next/font/google'

import client from "@/src/apollo/client";
import TourCard from "@/src/components/card/TourCard";
import BookingForm from "@/src/components/booking/BookingForm";
import Layout from "@/src/components/layouts";
import Footer from "@/src/components/layouts/footer/Footer";
import { GET_MENUS } from "@/src/queries/get-menus";
import TourSlider from "@/src/components/card/TourSlider";
import TourDetails from "@/src/components/tourdetails/TourDetails";
import TourPriceCalculator from "@/src/components/tourcalculate/TourCalculate";
import TourDetailss from "@/src/components/tourcalculate/TourDetails";
import Table from "@/src/components/tables/Table";
import Herobanner from "@/src/components/hero";

//const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {


  return (
   <Layout data={data}>
   <Herobanner />
    <section className="py-16 bg-gray-100">
    
    <div className="two alt-two">
        <h1>Alternate
    <span>Example Tagline Text</span>
        </h1>
    </div>
    <div className="grid grid-cols-1 gap-4 px-5 py-5 md:grid-cols-2 lg:grid-cols-3">
     
     
       <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionImage="/assets/badges/best-seller.png"
      />
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionImage="/assets/badges/new.png"
      />
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionImage="/assets/badges/most-popular.png"
      />
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionImage="/assets/badges/recommand.png"
      />
      {/* Add more TourCard components with different data */}
      </div>
    </section>

      <section className="py-16 bg-gray-100">
        <div className="px-5 two">
          <h1>Style Two
              <span>Example Tagline Text</span>
          </h1>
        </div>
        <TourSlider className="px-5" />
      </section>
      <Table />
      <TourDetails />
      <TourPriceCalculator />
      <TourDetailss />
     {/*<BookingForm /> */}
    
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
