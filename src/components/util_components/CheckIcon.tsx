
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Tooltip from '@mui/material/Tooltip'
import GppBadIcon from '@mui/icons-material/GppBad';
import Typography from '@mui/material/Typography'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { LoadingButton } from '@mui/lab';
import { useVerifyAccount } from '../register/api';


interface props{
  size:number
  status:string|undefined
}


function CheckIcon({size,status}:props) {
 // ['Activated','Suspended','Deleted','Deactivated']

  const  {  mutateAsync,status:api,error,isLoading } = useVerifyAccount()
  const handleVerify = async () =>{
    
      await mutateAsync()
 
      return 
  }
  
  if(status==="Activated")
  return (  
      <>
        <Typography variant="caption" color="success">{status}</Typography>  
    <Tooltip title="Your account has been verified !">
      <VerifiedUserIcon sx={ {fontSize:size    }} color="success"></VerifiedUserIcon>
    </Tooltip>

      </>
    
  );
  if(status==="Suspended")
  return(
<>
<Typography variant="caption" color="warning">{status}</Typography>  
<Tooltip title="Your account has been blocked from many actions, please contact admin for more information and support !">
<GppMaybeIcon sx={ {fontSize:size    }} color="warning"></GppMaybeIcon>
  </Tooltip>
</>
  )
  
  if(status==="Deactivated")
  return(
<>
<Typography variant="caption" color="error">{status}</Typography>  
<Tooltip title="Your account hasn't actived !">
<GppMaybeIcon sx={ {fontSize:size    }} color="error"></GppMaybeIcon>
  </Tooltip>

    { api=== "idle"?
      <> 
      <LoadingButton loading={isLoading}  onClick={handleVerify} className=' px-1 py-1'  >
    <AddModeratorIcon ></AddModeratorIcon>
    </LoadingButton>
      </>:null
    }
     { api=== "loading"?
      <> 
      <LoadingButton loading={isLoading}  className=' px-1 py-1'  >
    <AddModeratorIcon ></AddModeratorIcon>
    </LoadingButton>
      </>:null
    }
    
    { api===  "success"?
      <> 
      <MarkEmailReadIcon  sx={ {fontSize:size    }} color="success" ></MarkEmailReadIcon>
      <Typography variant="caption" color="green">{"Your verify link has been sent to your email !"}</Typography>
      </>:null
    }
       { api=== "error"?
      <> 
      <MarkEmailReadIcon  sx={ {fontSize:size    }} color="success" ></MarkEmailReadIcon>
      <Typography variant="caption" color="red">{error.message}</Typography>
      </>:null
    }
</>
  )
  
  if(status==="Deleted")
  return( 
     <>
     <Typography variant="caption" color="error">{status}</Typography>  
  <Tooltip title="Your account has been blocked, becasue of your violence of odd job policy, please contact the admin for more information and support !">
     <GppBadIcon sx={ {fontSize:size    }} color="error"></GppBadIcon>
  </Tooltip>
     </>
 )
  return null
}

export default CheckIcon