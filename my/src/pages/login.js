import { Button, Container, Heading, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Login=()=>{
    const [data,setdata]=useState({
        email:"",
        password:"",
    })
    const c=(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    }
    const click=(e)=>{
        e.preventDefault();
    }
    const{email,password}=data
    return(
        <Container w="500px" h="500px"  top="100px" left="500px"position="absolute" textAlign="center">
            <Heading textAlign="center">Login</Heading>
            <Text  fontSize='lg' textAlign="left">Email </Text>
            <Input w="500px" h="56px" placeholder="Email" type="text" value={email} name="email" onChange={c}></Input>
            <Spacer h="50px"/>
            <Text  fontSize='lg' textAlign="left"> password</Text>
            <Input   w="500px" h="56px" placeholder="password" type="text" value={password} name="password" onChange={c}></Input>
            <Spacer h="50px"/>
            <Button onClick={click}>Login</Button>
            <Spacer h="50px"/>
            <Link to="/signup">Register here</Link>
        </Container>


    )
}