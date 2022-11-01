 
import Typography from '@mui/material/Typography'
 

function Info({children,type}:any):any {


  if(type==="password"){

   return <input readOnly className=' focus:outline-none  ' type={"password"} value={"donotinspect"}/>
  }else if(!type){
    
  return ( <>

      <Typography fontFamily="unset"  variant="caption" color="initial">{children}</Typography>
  </> );
  }
}

export default Info;