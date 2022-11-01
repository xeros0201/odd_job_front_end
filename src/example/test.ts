import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const useTest = () =>{

  const currentUser = "6321a5e6a7c64a6d3f21a554"
    const [noti, setNoti] = useState([{}])
    const [socket, setSocket] = useState<any>(io("api.bioklaw.tech:3000",{  
      query:{
        id: currentUser
      },
      rejectUnauthorized: false
    }))
  
   
  
    console.log("rerender")
    useEffect(()=>{
    socket.on("admin_noti",(msj: Array<Object>)=>{
      setNoti(msj)
    })
    },[socket])
}
// function App() {
  

 

//   const [images, setImages] = useState([])
//   useEffect(()=>{
//    (async()=>{
//        const res = await axios.get(`${URL}/image`)

//        setImages(res.data)
//    })()
//   },[])

//  return (
//    <div>
//      <Container  maxWidth="xs">
//          {images?images.map((data)=>{
//            return(
//              <div className="d">
//                <img src={toImage(data)} alt="" />
//              </div>
//            )
//          }):""}
//      </Container>
//    </div>
//  );
// }