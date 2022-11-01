 
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GenericResponse, IUser } from "../../lib/interface";
import { useLogged } from "../hooks";
import { useCreateUser } from "./api";

import ResForm from "./form";
import RegSuccess from "./succes";


function Register() {
  const currentUser = useLogged()
  const navigate = useNavigate()
  useLayoutEffect(() => {
      if(currentUser){
        navigate('/profile')
      }
  
    return () => {
      
    };
  }, [currentUser])
   const {mutateAsync, isLoading,isError,isSuccess,error } = useCreateUser()
  const getData = async   (data:IUser): Promise<GenericResponse>=>{
  

   return await  mutateAsync({
    name:data.name,
    password:data.password,
    address:data.address,
    phone:data.phone,
    email:data.email,
    role:data.role
   })
  }
  return(

 <>
 <div className=" w-full flex justify-center">

 { !isSuccess? <ResForm error={error} isSuccess={Boolean(isSuccess)} isError={Boolean(isError)}   isLoading={Boolean(isLoading)} getData={getData} ></ResForm>
:
<RegSuccess></RegSuccess> 
}

 </div>
 </>
  )
}

export default Register;