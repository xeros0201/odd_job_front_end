import { LoadingButton } from "@mui/lab"
import { Button, TextField } from "@mui/material"
import {   SubmitHandler, useForm } from "react-hook-form"
import { GenericLoginResponse, ILogin } from "../../lib/interface"

type LoginProps = {
  getData: (data:ILogin)=> Promise<GenericLoginResponse>
  isLoading: Boolean
  isError:Boolean
  isSuccess:Boolean
  error: any
}
interface  IFormInputs {

  email:string
  password:string
 
}
const  LoginForm:React.FC<LoginProps>=({isLoading,isError,isSuccess,error,getData}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>();


const onSubmit:SubmitHandler<IFormInputs> =data=>{
    getData(data)
}

  return (  

    <>
       <div className=" w-[40rem] pt-[200px]">
    {isError ? 
        <p  className=" text-red-500">{`*${error.message}`}</p>:""
        }
    <form className="   items-center flex gap-10 " onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-[80%] flex gap-6 flex-col ">
        
 

     
         <TextField 
           disabled={ Boolean (isLoading)}
  fullWidth
    id="email" 
    label="email"
    {...register("email",{required:"Email is required",
    pattern: { 
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message:"*Email notvalid"
    }})}
    error={Boolean(errors.email)}
    helperText={errors.email?.message}
     variant="standard" />


 

          <TextField 
            disabled={ Boolean (isLoading)}
   fullWidth
    id="password" 
    label="password"
    {...register("password",{required:"Password is required",
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/i,
      message: "*Password must be eight characters including one uppercase letter, one special character"
    }
  })}
    error={Boolean(errors.password)}
    type="password"
    helperText={errors.password?.message}
     variant="standard" />
            
   
        <div className="clearfix"></div>
      </div>

      <div className=" ">

        {! isLoading ? <Button color="warning"   variant="outlined" type="submit" >
          Login
        </Button>:
        <LoadingButton
        loading variant="outlined"
        
        color="warning"
        >
           Login
        </LoadingButton>}
     

      </div>
   
       
      
    </form>
    </div>
    </>
  );
}

export default LoginForm;