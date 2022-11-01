import React  from "react"
 
import { useForm, SubmitHandler } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

 
import { GenericResponse, IUser } from "../../lib/interface";

interface  IFormInputs {

  name:string
  password:string
  phone:number
  email:string
  address:string
  role: string
  re_password:string

}
type ResProps = {
  getData: (data:IUser)=> Promise<GenericResponse>
  isLoading: Boolean
  isError:Boolean
  isSuccess:Boolean
  error: any
}
 const  ResForm:React.FC<ResProps>=({getData,isLoading,isError,isSuccess,error}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>();
  
 
  const onSubmit: SubmitHandler<IFormInputs> = data =>{ 
    getData(data)
 };
 
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
   placeholder="name"
    {...register("name",{required:"Full name is required"})}
    error={Boolean(errors.name)}
    helperText={errors.name?.message}
    id="name" 
    label="name"
     variant="standard" />

         <TextField 
           disabled={ Boolean (isLoading)}
         fullWidth
     defaultValue={""}
    id="phone" 
    label="phone"
    {...register("phone",{required:"Phone is required"})}
    error={Boolean(errors.phone)}
    type={"number"}
    helperText={errors.phone?.message}
     variant="standard" />
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
    className=" text-4xl"
    id="address" 
    label="address"
    {...register("address",{required:"Address is required"})}
    error={Boolean(errors.address)}
    helperText={errors.address?.message}
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
            <TextField 
              disabled={ Boolean (isLoading)}
  fullWidth
    className=" text-4xl"
    id="re_password" 
    type="password"
    label="re_password"
    {...register("re_password",{required:"Confirmation password is required",
    validate: (val: string) => {
      if (watch('password') !== val) {
        return "Your passwords do no match";
      }
    },})}
    error={Boolean(errors.re_password)}
    
    helperText={errors.re_password?.message}
     variant="standard" />
         <FormControl   disabled={ Boolean (isLoading)} error={Boolean(errors.role)} >
          <FormLabel component="legend"> Choose Your Role </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel 
              value="customer" 
              control={
                <Radio {...register("role", { required: "Choose your role" })} />
              } 
              label="customer"
             />
            <FormControlLabel 
              value="vendor" 
              control={
                <Radio {...register("role", { required: "Choose your role" })} />
              } 
              label="vendor" 
              />
            
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.role?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div>
      </div>

      <div className=" ">

        {! isLoading ? <Button color="warning"   variant="outlined" type="submit" >
         Register
        </Button>:
        <LoadingButton
        loading variant="outlined"
        
        color="warning"
        >
        Register

        </LoadingButton>}
     

      </div>
   
       
      
    </form>
    </div>

    </>
   );
}

export default ResForm;