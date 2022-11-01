import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Box, Typography } from "@mui/material";
 

function RegSuccess() {

 
  return ( 

    <>
    <Box flex="true"  className=' pt-[20rem]' alignItems={'center '} justifyContent="center" >
      <MarkEmailReadIcon sx={{ fontSize: 200 }} color='success'></MarkEmailReadIcon>
      <Typography variant='h3' color={'green  '} >Your verification link has been sent to your email !</Typography>
    </Box>
    </>
   );
}

export default RegSuccess;