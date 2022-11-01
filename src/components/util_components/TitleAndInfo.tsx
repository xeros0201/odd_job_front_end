import CheckIcon from "./CheckIcon";
import CheckRoleIcon from "./CheckRoleIcon";
import Info from "./Info";
import TypoTitle from "./typo";

interface props {
  title:string
  info:string |undefined
  type?:string
}

function TitleAndInfo({title,info,type}:props) {

  if( title==="status"){

      
      return ( 
      <div className=" py-3 items-end flex gap-2">
        <div className="  flex justify-between w-28">
  
        <TypoTitle  >{title}</TypoTitle>
          <TypoTitle>|</TypoTitle>
        </div>
      
        <CheckIcon status={info} size={30}></CheckIcon>
      </div>
  
     );
  }
  if(title ==="role"){
    return ( 
      <div className=" py-3 items-end flex gap-2">
        <div className="  flex justify-between w-28">
  
        <TypoTitle  >{title}</TypoTitle>
          <TypoTitle>|</TypoTitle>
        </div>
        <div className=" items-end flex gap-2">

        <Info type={type} >{info}</Info>
        <CheckRoleIcon></CheckRoleIcon>
        </div>

      </div>
  
     );
  }
  return ( 
    <div className=" py-3 items-end flex gap-2">
      <div className="  flex justify-between w-28">

      <TypoTitle  >{title}</TypoTitle>
        <TypoTitle>|</TypoTitle>
      </div>
      <Info type={type} >{info}</Info>
    </div>

   );
}

export default TitleAndInfo;