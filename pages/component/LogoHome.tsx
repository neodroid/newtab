import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const LogoHome = () => {
 
        return(

            <Flex justifyContent="center" 
            alignItems="center" 
            w="100%"  
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover"
            
            >
           
             <Flex  
            
             alignItems="center" 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1200px", // 992px upwards
            ]} 
            h='100px'
            // bg=""
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover" 
            flexDirection="row">
        <Box w="50px" ml="10"
        ><img src="/new tab polos.png"/></Box>
        
        

        </Flex>
    </Flex>
           
     
);
};

export default LogoHome;

   
