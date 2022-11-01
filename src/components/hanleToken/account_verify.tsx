import { useLocation, useNavigate } from "react-router-dom";
import queryString from  'query-string'
import { useVerifyToken } from "./api";
import { IVerifyToken } from "../../lib/interface";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LoadingAndError from "../util_components/LoadingAndError";
import Typography from '@mui/material/Typography'
 
function AccountVerify() {

  const {search } = useLocation()
  const {token,id} =  queryString.parse(search)
  const navigate = useNavigate()
    const  user :IVerifyToken ={token:token,id:id}
  const { status,error} = useVerifyToken(user)
  

  
if(status==="success"){
  setTimeout(()=>navigate('/profile'),3000)
  return ( 
  
    <>
    <div className=" bg-slate-300 pt-[12.5rem] h-screen flex flex-col w-screen items-center ">
  
    <VerifiedUserIcon sx={{ fontSize: 200 }}   className=" h-10 w-10" color="success"> </VerifiedUserIcon>
    <Typography variant="h1" color="green"> Verified </Typography>
    </div>
    </>
   );
}else{
  return (
    <div className="  w-screen h-screen">

      <LoadingAndError status={status} error={error}></LoadingAndError>
    </div>
  )
}

}

export default AccountVerify;