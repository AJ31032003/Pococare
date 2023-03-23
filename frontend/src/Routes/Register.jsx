import { Box, Input, VStack } from '@chakra-ui/react'
import React, {  useState } from 'react'
import axios from "axios"

const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pwd, setpwd] = useState("")


    const handleSubmit=(e)=>{
        e.preventDefault()
        let data={name,email,pwd}
        axios.post("https://light-cow-boot.cyclic.app/register",data).then((res)=>{
            if(res.data==="Already exist."){
                alert("Already Exist")
            }else if(res.data==="Registered Successfully."){
                alert("Succesfully Registered.")
            }
        })
    }

  return (
    <Box>
        <VStack>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input required onChange={(e)=>setname(e.target.value)} type="text" placeholder='Name'/>
                <Input required onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Email'/>
                <Input required onChange={(e)=>setpwd(e.target.value)} type="password" placeholder='Password'/>
                <Input type="submit" placeholder='SUBMIT'/>
            </form>
        </VStack>
    </Box>
  )
}

export default Register