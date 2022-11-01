import {   useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ILogin, GenericLoginResponse } from "../../lib/interface"
import { useLogged  } from "../hooks"
import { useLogin } from "./api"
import LoginForm from "./form"

 

function Login() {
 
  const currentUser = useLogged()
  const navigate = useNavigate()
  useLayoutEffect(() => {
      if(currentUser){
        navigate('/profile')
      }
  
    return () => {
      
    };
  }, [currentUser])
  const { mutateAsync,isLoading,isSuccess,isError,error } = useLogin()

 const getData = async  (data:ILogin):Promise<GenericLoginResponse>=>{


  return  await  mutateAsync({
    email:data.email,
    password:data.password
  })
 }
  return (  
    <>
     <div className=" w-full flex justify-center">
      <LoginForm getData={getData} isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}></LoginForm>


    </div>
    
    </>
  );
}

export default Login;