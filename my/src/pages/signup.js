import { Button, Container, Heading, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
export const Signin=()=>{
    
    const [data,setdata]=useState({
        name:"",
        email:"",
        password:"",
        avatar:""
    })
    const c=(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    }
    const click=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:7400/api/register",data)
        .then(res=>{console.log(res.data)
         if(res.data.message==="new user Register successfully"){
           
         }
        })
        .then(data=>console.log(data))
    }
    const {name,email,password,avatar}=data
    return(
        <Container w="500px" h="500px"  top="100px" left="500px"position="absolute" textAlign="center">
            <Heading textAlign="center">signup</Heading>
            <Text  fontSize='lg' textAlign="left">Name </Text>
            <Input w="500px" h="56px" placeholder="Name" name="name" value={name} type="text" onChange={c}></Input>
            <Spacer h="50px"/>
            <Text  fontSize='lg' textAlign="left">Avatar</Text>
            <Input w="500px" h="56px" placeholder="image url" name="avatar"  value={avatar} type="text" onChange={c}></Input>
            <Spacer h="50px"/>
            <Text  fontSize='lg' textAlign="left">Email </Text>
            <Input w="500px" h="56px" placeholder="Email" name="email" value={email} type="text" onChange={c}></Input>
            <Spacer h="50px"/>
            <Text  fontSize='lg' textAlign="left"> password</Text>
            <Input   w="500px" h="56px" placeholder="password" name="password" value={password} type="text" onChange={c}></Input>
            <Spacer h="50px"/>
            <Button onClick={click}> signup</Button>
            <Spacer h="50px"/>
            
        </Container>


    )
}