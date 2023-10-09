import Header from "./header";
import Footer from "./footer/Footer";

const Layout = ({data,children}) => {
   console.warn('menus',data);
   return (
    <div>
        <Header headerMenus={data?.menus?.headerMenus} />
        {children}
        <Footer />
    </div>
    
        

   )
   
  
}
export default Layout