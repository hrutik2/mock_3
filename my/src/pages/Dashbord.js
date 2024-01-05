import { Container,Input,Box, Image,Heading, Button, Select,} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { customButtonStyles, customStylesSelect1, customStylesforTH } from '../css.js/th';
import { InitialFocus } from '../c/mode';
export const Dashboards=()=>{
    const customStyles = {
        width: '1216px',
        height: '830px',
        top: '354px',
        left: '263px',
        borderRadius: '16px',
        background: 'hsla(0, 0%, 100%, 1)',
        boxShadow: '0px 8px 32px 0px hsla(246, 64%, 42%, 0.08)',
        position: 'absolute',
      };
     const[data,setdata]=useState([])
     
    return(
      <div>
        <Box w="1129px" h="52px" marginTop="56.1px" marginLeft="34px" display="flex" justifyContent="space-between">
            <Input w="655px" h="52px" borderRadius="3px" border="1px solid #00000033" />
  
             <Box w="124px" h="52px">
                 
              </Box>
        </Box>
        <Box w="1129px" display="flex"  justifyContent="space-between">
        <Box display="flex" justifyContent="space-between" gap="30px" >
            <Select style={customStylesSelect1}     iconSize='0px'>
            <option value=''>Filter by gender</option>
                <option value='male'>Male</option>
                <option value="female">Female</option>
            </Select>
            
            <Select style={customStylesSelect1} iconSize='0px'>
                <option value="">Filter by category</option>
                <option value="haircare">Haircare</option>
                <option value="makeup">Makeup</option>
                <option value="skincare" >Skincare</option>
            </Select>
            <Select style={customStylesSelect1} iconSize='0px'>
            <option>Sort by order</option>
                <option>male</option>
                <option>Female</option>
            </Select>
        </Box>
        <InitialFocus/>
        </Box>
     
        <Box  style={customStyles}>
            <Box w="1152" h="64px">
              Product List
            </Box>
        <Box  w="1152" >
        <TableContainer >
         <Table >
   
    <Thead  w="1152" h="64px" background="hsla(0, 0%, 97%, 1)" >
      <Tr>
        <Th style={customStylesforTH}>product</Th>
        <Th style={customStylesforTH}>gender</Th>
        <Th style={customStylesforTH}>category</Th>
        <Th style={customStylesforTH}>price</Th>
        <Th style={customStylesforTH}>description</Th>
        <Th style={customStylesforTH}>action</Th>
      </Tr>
    </Thead>
    <Tbody bg="background: hsla(0, 0%, 100%, 1)"  >
      {data.map(el=>(
        <Tr w="1152" h="65px">
            <Th display="flex" flexDirection="row" gap="10px">
             <Image w="44px" h="44px" src={el.picture}></Image>
              <Heading fontSize="14px" fontFamily="Inter" fontWegith="400" marginTop="12px">{el.name}</Heading> 
            </Th>
            <Th style={customStylesforTH}>
               {el.gender}
            </Th>
            <Th style={customStylesforTH}>{el.category}</Th>
        <Th style={customStylesforTH}>{el.price}</Th>
        <Th style={customStylesforTH}>{el.description}</Th>
        <Th display="flex" flexDirection="row" gap="10px">
           <Button > < Image w="36px" h="36px"  src="https://www.seekpng.com/png/detail/202-2022672_edit-comments-edit-icon-png-circle.png"></Image></Button> 
           <Button>  <Image  w="36px" h="36px" src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-delete-icon-image_1129289.jpg"></Image></Button> 
              
            </Th>

        </Tr>
      ))}
    </Tbody>
    <Tfoot>
     
    </Tfoot>
  </Table>
</TableContainer>
        </Box>
        </Box>
      </div>
    )
}