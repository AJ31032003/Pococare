import { Box, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("")   
    const handleSubmit=(e)=>{
        e.preventDefault()
        let data={email,pwd}
        axios.patch("https://light-cow-boot.cyclic.app/login",data).then((res)=>{
            if(res.data==="Wrong Credentials."){
                alert("Wrong Credentials.")
            }else if(res.data==="No Such User Exist."){
                alert("No such user exist")
            }else if(res.data.data.length!==0){
                localStorage.setItem("token",JSON.stringify(res.data.token))
                alert("SuccessFully Logged in.")
            }
        })
    }

  return (
    <Box>
        <VStack>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input required onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Email'/>
                <Input required onChange={(e)=>setpwd(e.target.value)} type="password" placeholder='Password'/>
                <Input type="submit" placeholder='SUBMIT'/>
            </form>
        </VStack>
    </Box>
  )
}

export default Login