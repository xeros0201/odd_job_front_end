import Footer from "./footer";
import Navbar from "./navbar";
export interface childrenProps {
  children: JSX.Element;
  className?:string
}
function Layout({children}:childrenProps ) {
  return ( 
    <>
    <Navbar></Navbar> 
    {children}
    <Footer></Footer>
    </>
   );
}

export default Layout;