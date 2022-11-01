import { useMutation } from "@tanstack/react-query";
import { api, useAxios } from "../../instances";
import { GenericLoginResponse, GenericResponse, ILogin } from "../../lib/interface";
import { loginSuccess, logOut } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hooks";




const userLogin =  async (data:ILogin):Promise<GenericLoginResponse> =>{

try {
  const res = await api.post('/account/login',data)
  return res.data
} catch (error:any) {
  throw new Error(error.response.data)  
}

}

export const useLogin = () =>{
const dispatch =  useAppDispatch()
  return useMutation<
  GenericLoginResponse ,
  Error,
  ILogin
  >(async(user)=>userLogin(user),{
    onSuccess:(data)=>{
      
      dispatch(loginSuccess(data.user))
      return
    }
  })
}

const userLogout = async (axiosJWT:any):Promise<GenericResponse> =>{
  try {

    const { axios,user } = axiosJWT
    const res = await axios.post('/account/logout',user)

    return res.data
  } catch (error:any) {
    throw new Error(error.response.data)
  }

}

export const useLogout = () =>{
  const dispatch =  useAppDispatch()
  const axiosJWT = useAxios()
    return useMutation<
    GenericResponse ,
    Error>(async()=>userLogout(axiosJWT),{
      onSuccess:(data)=>{
        
        dispatch(logOut())
        return
      }
    })
  }

