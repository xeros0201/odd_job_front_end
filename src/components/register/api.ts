 
import {   GenericResponse,  IUser, IUserLogin } from "../../lib/interface";
import{ useMutation,    } from '@tanstack/react-query'
import { api, useAxios } from "../../instances";
 
 
 

// axios.defaults.baseURL ='https://api.bioklaw.tech/api';

 const userRegister = async (user:IUser): Promise<GenericResponse>=>{
  try {
    const res = await api.post('/account',user)

    return res.data 
  } catch (error:any) {
    console.log(error.response.data)
    throw new Error(`${error.response.data}`) 

} }

export const useCreateUser = () =>{

  return useMutation<
  GenericResponse,
  Error,
  IUser
  >(async(user)=>userRegister(user),{
    onSuccess:()=>{
      return
    }
  })
}

const verifyAccount =async (user:IUserLogin,axiosJWT:any) :Promise<GenericResponse> =>{
  try {
    const res = await axiosJWT.post('/account/activate_account',user)
    return res.data
  } catch (error:any) {
    throw new Error(error.response.data)
  }
}


export const useVerifyAccount = () =>{

const { axios,user } = useAxios()

  return useMutation<
  GenericResponse,
  Error
  >(async()=>verifyAccount(user,axios),{
    onSuccess:()=>{
      
      return
    }
  })
}