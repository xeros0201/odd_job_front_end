import { childrenProps } from "../layout";

function InputWraper({...field}) {
  return ( 
    <input {...field}  className=" border-2 "/>
   );
}

export default InputWraper;