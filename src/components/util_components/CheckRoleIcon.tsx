import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import HandymanIcon from '@mui/icons-material/Handyman';
import { useLogged } from '../hooks';

function CheckRoleIcon() {

  const user = useLogged()

  if(!user) return null
  // enum:['admin','vendor','customer','moderator','worker'],

  if(user.role==="customer") return ( 
  <>
  <AccountCircleIcon sx={{ fontSize:30}} ></AccountCircleIcon>
  </>);
  if(user.role==="vendor") return ( 
    <>
    <BuildCircleIcon color="warning" sx={{ fontSize:30}} ></BuildCircleIcon>
    </>);
  if(user.role==="worker") return ( 
        <>
        <HandymanIcon color="warning" sx={{ fontSize:30}} ></HandymanIcon>
        </>);
        return null
}

export default CheckRoleIcon;