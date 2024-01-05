import{ Select ,Button,Modal,ModalBody,ModalContent,ModalOverlay,ModalHeader,ModalFooter ,FormControl,FormLabel,useDisclosure,Input,ModalCloseButton} from "@chakra-ui/react"
import { customButtonStyles } from "../css.js/th"
import { useState } from "react"

export const  InitialFocus=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setdata]=useState({
        name:"",
    picture:"",
    description:"" ,
    gender:"",
    category:"",
    price:"",
})
 const change=(e)=>{
    const name=e.target.name
    const value=e.target.value
    if(name==="price"){
        const v=Number(value)
        setdata({...data,[name]:v})
    }else{

    setdata({...data,[name]:value })
    }
}

const Click=(e)=>{
    e.preventDefault();
    console.log(data)
}
   const{name,picture,description,gender,category,price}=data
    return (
      <>
        <Button style={customButtonStyles} onClick={onOpen}>Add product</Button>
        
        <Modal
          
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input placeholder='Product name' name="name" value={name} onChange={change}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>product Images</FormLabel>
                <Input placeholder='Image url' name="picture" value={picture} onChange={change} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>product description</FormLabel>
                <Input placeholder='product Description'name="description" value={description} onChange={change}/>
              </FormControl>
              <FormControl mt={4}>
                <Select placeholder="select gender" name="gender" value={gender} onChange={change}>
                <option value='male'>Male</option>
                <option value="female">Female</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <Select placeholder="select catrgory" name="category" value={category} onChange={change}>
                <option value="haircare">Haircare</option>
                <option value="makeup">Makeup</option>
                <option value="skincare" >Skincare</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>price</FormLabel>
                <Input placeholder='product prices' name="price" type="number" value={price} onChange={change} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={Click} colorScheme='blue' mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }