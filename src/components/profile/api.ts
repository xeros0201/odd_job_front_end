import {  useQuery } from "@tanstack/react-query";
 
import { useAxios } from "../../instances";
import { GenericLoginResponse } from "../../lib/interface";
import { loginSuccess } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hooks";





const getOneUser = async  (axiosJWT:any,dispatch:Function):Promise<GenericLoginResponse>=>{

  
  try {
    const { axios,user } = axiosJWT
    const res = await axios.get('/account/get-one/'+user._id)
    const newUser = res.data
    dispatch(loginSuccess({...user,newUser}))
    return res.data
  } catch (error:any) {
    throw new Error(error.response.data)
  }
}

export const useGetOneUser =  () =>{

  const dispatch =  useAppDispatch()
  const axiosJWT = useAxios()
    return useQuery(["account"],()=>getOneUser(axiosJWT,dispatch),{
      staleTime:Infinity,
      refetchOnMount:true,
      retry:false,
      refetchOnReconnect:true,
      refetchOnWindowFocus:false
    })
}