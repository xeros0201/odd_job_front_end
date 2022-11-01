export const URL = "https://api.bioklaw.tech"

export const toImage = (data)=>{
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array((data.img.data.data)))
  )
  return `data:${data.contentType};base64,${base64String}`
}