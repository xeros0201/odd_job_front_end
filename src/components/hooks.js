import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { bgOrange,   bgWhite, blackText, whiteText } from "../redux/navSlice"



export const useNav = () =>{

  const dispatch = useAppDispatch()
  const text = useAppSelector(state=>state.nav.text)
 const bg = useAppSelector(state=>state.nav.bg)
  return{
    text:text,
    bg:bg,
    blackText: ()=> dispatch(blackText()),
    whiteText:()=> dispatch(whiteText()),
  
    bgWhite:()=> dispatch(bgWhite()),
    bgOrange:()=> dispatch(bgOrange())
  }
}

export const useLogged = () =>{
  return  useSelector(state=>state.auth.login.currentUser)
}