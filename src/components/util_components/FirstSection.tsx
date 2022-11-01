import { childrenProps } from "../layout";

function First({children,className}:childrenProps) {
  return ( 
    <div className={`${className} w-screen h-screen pt-[12.5rem]`}>
      {children}

    </div>
   );
}

export default First;