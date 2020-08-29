import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const Services = () => {
 
        return(

    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
        
        <Flex
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1280px", // 992px upwards
            ]}
           
            as="nav"
            textAlign="center"
            alignItems="center"
            bgImage="url('/bekron1.png')"
            bgPos="center"
            bgSize="700px"
            backgroundRepeat="no-repeat"
            justifyContent="center"
            padding="1.5rem"
            bg="white"
            color="black"
           
           
        >
            
          
             <Flex width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "70%     ", // 992px upwards
            ]}  textAlign="center"  flexDirection="column"
            alignItems="center" justifyContent="center">      
             <Box 
                        fontSize={["1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                        textAlign="center"
                        
                    ><Text fontFamily="heading">Our Services</Text> </Box>
               
              <Flex flexDirection="row">

            <Flex flexDirection="column" mx="3">

            <Box 
                        fontSize={["3rem", "4rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                        textAlign="center"
                        
                    ><Text fontFamily="black">2</Text> </Box>
                <Text textAlign="center"   fontSize={["xs", "xl"]}>
               Clients   </Text>
            </Flex>

            <Flex flexDirection="column" mx="3">
            <Box 
                         fontSize={["3rem", "4rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                        textAlign="center"
                        
                    ><Text fontFamily="black">3</Text> </Box>
                <Text textAlign="center" fontSize={["xs", "xl"]}>
                Projects   </Text>
              </Flex>
            </Flex>

              

              
               </Flex> 
                
        
        </Flex>



    </Flex>


);
};



export default Services;

