import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const NamaHome = () => {
 
        return(

            <Flex justifyContent="center" 
            alignItems="center" 
            w="100%"  
            bgImage="url('/bekron2.png')"
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
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover" 
            flexDirection="row">
        
        <Flex w="600px" bg=""  flexDirection="row-reverse" justifyContent="center" 
            alignItems="center" 
            fontSize={[
                "md", // base
                "md", // 480px upwards
                "xl", // 768px upwards
                "xl", // 992px upwards
            ]} >
            <Box >
            <Text fontFamily="heading" >Kevin Ahmad</Text>
           <Text as="i">Full-Stack Developer</Text>
            </Box>
           
        </Flex>


        <Flex w="600px" bg="" ml="" flexDirection="row" color="#F5F5F5" justifyContent="center" 
            alignItems="center"  textAlign="justify" fontSize={[
                "md", // base
                "md", // 480px upwards
                "xl", // 768px upwards
                "xl", // 992px upwards
            ]} >
        <Box >
           <Text fontFamily="heading"  >Saffan Firdaus</Text>
           <Text as="i">UI / UX Designer</Text>

            </Box>
        </Flex>
        

        </Flex>
    </Flex>
           
     
);
};

export default NamaHome;

   
