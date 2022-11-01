import {    GenericLoginResponse } from "../../lib/interface";
 
 
 
 
import TitleAndInfo from "../util_components/TitleAndInfo";
interface props{
  user:GenericLoginResponse | undefined
}
function UserInfo({user}:props) {
  const currentUser = user?.user
  // ['Activated','Suspended','Deleted','Deactivated']

  return ( 
    <>
    <TitleAndInfo title={"status"} info={currentUser?.status}></TitleAndInfo>
    <TitleAndInfo title={"name"} info={currentUser?.name}></TitleAndInfo>
    <TitleAndInfo title={"email"} info={currentUser?.email}></TitleAndInfo>
    <TitleAndInfo title={"phone"} info={`${currentUser?.phone}`}></TitleAndInfo>
    <TitleAndInfo title={"address"} info={currentUser?.address}></TitleAndInfo>
    <TitleAndInfo title={"role"} info={currentUser?.role}></TitleAndInfo>
    <TitleAndInfo type="password" title={"password"} info={"donotinspect"}></TitleAndInfo>
    </>
   );
}

export default UserInfo;