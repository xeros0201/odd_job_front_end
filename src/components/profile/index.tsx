import { Skeleton } from "@mui/lab";
import {   useLayoutEffect } from "react";
 
import { useLogged } from "../hooks";
import First from "../util_components/FirstSection";
import Error from "../util_components/NotFound";
import { useGetOneUser } from "./api";
import UserInfo from "./info";


function Profile() {
  const currentUser = useLogged()
 const {data,status} = useGetOneUser()
 const skeleton=[1,2,3,4,5,6]
   
  useLayoutEffect(() => {
 
      if(!currentUser){
       
      }
  
    return () => {
      
    };
  }, [currentUser])

  if(!currentUser) return <Error></Error>

  if(status==="loading"){
    return(
      <First className="flex justify-center">
        <div className=" w-1/2">

      <div className=" flex flex-col gap-2">
      {skeleton.map((i)=>{
       
       return <div key={i} className=" py-3  flex gap-2">
      <Skeleton animation="wave" variant="rounded" width={70} height={30} />
      |
      <Skeleton animation="wave" variant="rounded" width={300} height={30} />
      </div>
      }) }
      </div>
        </div>
      </First>
    )
  }
  if(status==="error"){
    return <Error></Error>
  }
  if(status==='success'){

    return (  
  
      <>
        <First className=" flex justify-center">
          <div className=" w-[50%]">
            <UserInfo user ={data}></UserInfo>
            
            
          </div>
        </First>
      </>
    );
  }
  return null
  
}

export default Profile;