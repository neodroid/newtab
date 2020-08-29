import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const JudulHome = () => {
 
        return(

            <Flex 
            as="i"
            justifyContent="center" 
            alignItems="center" 
            w="100%"  
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover"
           fontSize={[
            "xl", // base
            "xl", // 480px upwards
            "30px", // 768px upwards
            "40px", // 992px upwards
        ]} 
            >
           
             <Flex justifyContent="center" alignItems="center" width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1200px", // 992px upwards
            ]} 
            my={[
                "10", // base
                "10", // 480px upwards
                "", // 768px upwards
                "", // 992px upwards
            ]} 
            h='50px'
            // bg=""
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover" 
            flexDirection="row"
           
            >
                
        
        <Flex w="600px" bg=""  flexDirection="row-reverse" fontFamily="default">
            Clean Code Me
           
        </Flex>


        <Flex w="600px" bg="" ml="" flexDirection="row" color="#F5F5F5" fontFamily="default">
       ets Neat Design
        </Flex>
        

        </Flex>
    </Flex>
           
     
);
};

export default JudulHome;

   
