
export const validateContactForm=(name,email,message)=>{

  
const isEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}/.test(email)
const isName=/^[A-Za-zÀ-ÿ' -]+$/.test(name)
const isMessage=/^[a-zA-Z0-9\s.,!?]{10,}$/.test(message)


if(!isEmail) return 'Email is not valid'
if(!isName) return 'name is not valid'
if(!isMessage) return 'message is not valid'

return null

}