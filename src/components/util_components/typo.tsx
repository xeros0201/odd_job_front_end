import { useNav } from "../hooks";
import Typography from '@mui/material/Typography'

 
 

function TypoTitle({children}:any) {
 const { text} = useNav()
  return ( 
 
  <Typography className={`${text}`} fontFamily="unset"  variant="h6" color={"inherit"}>{children}</Typography>
   );
}



export default TypoTitle;