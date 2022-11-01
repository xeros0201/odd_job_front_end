import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogged, useNav } from "../hooks";
import AvatarAcc from "../login/profile";
import { wokerIcon } from "../util_components/icon";
import Typo from "../util_components/typo";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const unLogin = ['login', "|",'register'];


function Navbar() {
const currentUser = useLogged()

const { bg} = useNav()



 return<>
  <div className={` z-[100] font-U  justify-between border-opacity-30 border-b-2  text-white w-full px-5 items-center   flex py-3 h-auto  ${bg}`}>
    <div style={{ borderRadius:"100% 0% 100% 0% / 50% 50% 50% 50% "}} className="
    
    bg-gradient-to-b from-gray-900 to-gray-600 
    
    border-4 px-5 py-8 flex items-center justify-center gap-2"> {wokerIcon()} 
  
    <Link className=" text-2xl" to={`/`}>
    ODD JOB
         </Link>
    </div>
    <div className=" border-2 px-3 py-3 rounded-[20rem] bg-white flex gap-2">
      { !currentUser?
        unLogin.map((item,i)=>{

          if(i===1)  return <Typo> 
           <div className="opacity-50 text-gray-600 "> {item}</div>
            </Typo>
         return <div   key={item}>
          <Typo> 
         <NavLink className={nav=>nav.isActive?"opacity-100 text-gray-600 bg-amber-200 shadow-orange-600 border rounded-[20rem]  font-[500]   py-2 px-2  text-2xl     " :" text-gray-600  font-[500]  opacity-50  hover:text-1xl"} to={`/${item}`}>
         {item} 
         </NavLink>
        
         </Typo>
          </div>
        }) :
        <AvatarAcc></AvatarAcc>
      }
    </div>
  </div>

 </>
}

export default Navbar;