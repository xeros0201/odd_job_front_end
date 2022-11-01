export interface IUser {
  name:string
  password:string
  phone:number
  email:string
  address:string
  role: string
}
export interface ILogin{
  email:string
  password:string
}
export interface IUserLogin {
  name:string
 
  phone:number
  email:string
  address:string
  role: string
  status:string
  accessToken:string
  refreshToken:string
}
export interface ILoginSuccess{
  email:string
  password:string
}
export interface ICreateUserParams{
  name:string
  password:string
  phone:number
  email:string
  address:string
  role: string
}

export interface IVerifyToken {
 

    token?: string | (string | null)[] | null
    id?:string | (string | null)[] | null
  
}

export interface VerifyResponse {
  data: string
}