import axios from "axios"
import { useLogged } from "./components/hooks"
import jwt_decode from "jwt-decode"
import { loginSuccess } from "./redux/authSlice"
import { useDispatch } from "react-redux"
 
export const api = axios.create({
  baseURL :'https://api.bioklaw.tech/api'
})

const refreshTonken=async(currentUser)=>{
  try {
    const res = await api.post(`/account/refresh`,currentUser,{
      headers:{
        token: `Bearer ${currentUser.refreshToken}`
      }
    })

    return res.data.user
  } catch (error) {
    console.log(error)
  }
}

export const useAxios =  () =>{
 
  const user = useLogged()
  const dispatch = useDispatch()



    const axiosJWT= axios.create({
      baseURL :'https://api.bioklaw.tech/api',
      headers:{token:`Bearer ${user.accessToken}`},
      params:{
        id:user._id
      }
    })
      axiosJWT.interceptors.request.use(
  
        async(config)=>{
          console.log("here")
          let date = new Date()
          const decodedToken =jwt_decode(user.accessToken)
      
          const check = decodedToken.exp*1000 < date.getTime()
          
          if(decodedToken.exp*1000 < date.getTime()){
          
             const data = await refreshTonken(user);
            
             const refreshUser ={
               ...user,
               accessToken: data.accessToken,
               refreshToken: data.refreshToken
             }
             dispatch(loginSuccess(refreshUser))
             config.headers["token"]= `Bearer ${data.accessToken}`;
          }
            
          return config
        },
        (error)=>{
           
          return Promise.reject(error)
        }
      )
      return {axios:axiosJWT,
        user:user
} 
 
  

  


}


export const API_KEY = "AIzaSyDAY9MTrjco1CsK-ZlDggeR0QgkEgKdm2o"