import { Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SettingsIcon ,DragHandleIcon,CalendarIcon} from '@chakra-ui/icons'

export const Sidebar=()=>{
   return(
      <Box w="230px" h="1184px" bg="#FFFFFF">
      <Box w="203px" h="36px" marginTop="63px" marginLeft="18px">
        <h3>Nyka Dashboard</h3>
      </Box>
      <Box w="131px" h="993px"  marginTop="30px" marginLeft="41px" p="0px 0px 30px 0px" gap="525px">
        <Link to="/dashboard"><DragHandleIcon/>   Dashboard</Link>
        <Spacer h="30px"/>
        <Link to="/dashboard"><CalendarIcon/>   Analytics</Link>
        <Spacer h="30px"/>
        <Link to="/login" ><SettingsIcon/>  Login</Link>
      </Box>
    </Box>
    
    
   )
}