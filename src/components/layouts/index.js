import HeaderTop from "./headertop/HeaderTop";
import HeaderMain from "./headerMain/HeaderMain";
import Header from "./header/index";
import Footer from "./footer/Footer";


const Layout = ({data,children}) => {
   console.warn('menus',data);
   return (
    <div>
        <HeaderTop />
        <HeaderMain />
        <Header headerMenus={data?.menus?.headerMenus} />
        {children}
         <Footer /> 
    </div>
    
        

   )
   
  
}
export default Layout