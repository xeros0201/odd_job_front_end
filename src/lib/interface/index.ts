import { IUser, IUserLogin } from './user';

export * from './user'

export interface GenericResponse {
  status?: string;
  message?: string;
  error?:{
    response:{
      data:string
    }
  };
}
export interface GenericLoginResponse {
  status?: string;
  user?:IUserLogin;


  error?:any

 
}
export interface IUserResponse {
  status?: string;
  data: {
    user?: IUser;
    error?:string
  };
  error?:unknown
}
export interface IErrorResponse {
  status: string;
  response: {
    data: string;
  };
}








export function isApiError(x: unknown): x is IErrorResponse {
  if (x && typeof x === 'object' && 'code' in x) {
    return true;
  }
  return false;
}