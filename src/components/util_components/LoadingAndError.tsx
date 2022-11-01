import { Skeleton } from "@mui/material";
import { IStatus } from "../../lib/interface/api_status";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
 
import CircularProgress from '@mui/material/CircularProgress';
function LoadingAndError({status,error}:IStatus):any {


  if(status==='loading'){ 

    return(
    <div className=" relative w-screen h-screen bg-slate-500 flex-col flex justify-center items-center">

    <Skeleton
  sx={{ bgcolor: 'white.900' }}
  variant="circular"
  width={600}
  height={600}
    className="absolute"
>

</Skeleton>
<CircularProgress size={200} className=" h-40 w-40" color="success" />
    </div>
)}
if(status==='error'){

  return ( 

    <>
    <div className=" w-screen h-screen flex-col flex justify-center items-center">
  

    <UnpublishedIcon sx={{ fontSize: 200 }}     color="error" ></UnpublishedIcon>
    
    <div className=" text-3xl to-red-500">{error.message}</div>
    </div>
    </>
   );
}
 
}

export default LoadingAndError;