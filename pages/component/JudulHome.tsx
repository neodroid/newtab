import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const JudulHome = () => {
 
        return(

            <Flex justifyContent="center" 
            alignItems="center" 
            w="100%"  
            bgImage="url('/bekron.png')"
            bgPos="center"
            bgSize="cover"
           
            >
           
             <Flex justifyContent="center" alignItems="center" width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1200px", // 992px upwards
            ]} 
            h='50px'
            // bg=""
            bgImage="url('/bekron.png')"
            bgPos="center"
            bgSize="cover" 
            flexDirection="row">
        
        <Flex w="600px" bg=""  flexDirection="row-reverse" >
            Clean Code Me
           
        </Flex>


        <Flex w="600px" bg="black" ml="" flexDirection="row" color="#F5F5F5" >
       ets Neat Design
        </Flex>
        

        </Flex>
    </Flex>
           
     
);
};

export default JudulHome;

   
