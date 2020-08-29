import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const FotoHome = () => {
 
        return(

            <Flex justifyContent="center" 
            alignItems="center" 
            w="100%"  
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover"
          
            >
           
             <Flex  mt="5" justifyContent="center" alignItems="center" width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1200px", // 992px upwards
            ]} 
            h={[
                "190px", // base
                "250px", // 480px upwards
                "300px", // 768px upwards
                "300px", // 992px upwards
            ]} 
            bg="black"
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="cover" 
            flexDirection="row">
        
        <Flex w="600px" bg=""  >
            <Box w={[
            "130px", // base
            "200px", // 480px upwards
            "200px", // 768px upwards
            "200px", // 992px upwards
        ]}  >
            <img src="/kemad png.png"/>
            </Box>
           
        </Flex>
        <Button  mb={[
            "40", // base
            "20", // 480px upwards
            "", // 768px upwards
            "", // 992px upwards
        ]} 
        bg="#10172A"
        borderWidth="3px"
        h="50px"
        color="#F5F5F5"
        justifyContent="center" alignItems="center"
        fontFamily="heading"
        minW={[
            "120px", // base
            "200px", // 480px upwards
            "200px", // 768px upwards
            "200px", // 992px upwards
        ]} 
        >
        Lets Chat!
        </Button>

        <Flex w="600px" bg="" flexDirection="row-reverse">
        <Box w={[
            "130px", // base
            "200px", // 480px upwards
            "200px", // 768px upwards
            "200px", // 992px upwards
        ]} >
            <img src="/saffan png.png"/>
            </Box>
        </Flex>
        

        </Flex>
    </Flex>
           
     
);
};

export default FotoHome;

   
