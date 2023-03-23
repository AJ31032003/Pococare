import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const getData=async(token)=>{
    let response=await axios.get("https://light-cow-boot.cyclic.app/protected",{
        headers:{
            Authorization:token
        }
    })
    return response
}

const Protected = () => {
    const [preview, setpreview] = useState("")
    let token=localStorage.getItem("token") || ""
    

    useEffect(()=>{
        getData(JSON.parse(token)).then(res=>{
            setpreview(res.data)
        }).catch((err)=>{
            if(err.response.data.message){
                setpreview(err.response.data.message)
            }
        })
    },[])

  return (
    <Box>
        <Text id="content">{preview}</Text>
    </Box>
  )
}

export default Protected