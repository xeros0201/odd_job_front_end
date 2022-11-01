import {   useQuery } from "@tanstack/react-query"
import { api } from "../../instances"
import { IVerifyToken, VerifyResponse } from "../../lib/interface"


const verifyToken = async (data:IVerifyToken):Promise<VerifyResponse> =>{

  try {
    const res = await api.get('/account/verify_account',{
      params:{
        token:data.token,
        id:data.id
      }
    })
    return res.data
  } catch (error:any) {
      throw new Error(error.response.data)
  }

}

export const useVerifyToken = (data:IVerifyToken) => useQuery(["token"],()=>verifyToken(data),
{
  staleTime:Infinity,
  refetchOnMount:false,
  retry:false,
  refetchOnReconnect:false,
  refetchOnWindowFocus:false,
  retryOnMount:false
  
})


