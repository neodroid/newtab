import { Flex, Heading, Box, Button, Icon, Text, Stack } from '@chakra-ui/core'
import React from 'react'

const MenuService = (props) => (
    <Flex m="3"
    shadow="xl"
      textAlign="center"
      flexDirection="column"
   bg="#F5F5F5"
    alignItems="center"
    justifyContent="center"
     borderWidth=""
     borderColor="black"
     rounded="full"
     w={[
        "40%", // base
        "40%", // 480px upwards
        "40%", // 768px upwards
        "30%", // 992px upwards
        
      ]}
    fontSize={[
        "10px", // base
        "sm", // 480px upwards
        "xl", // 768px upwards
        "xl", // 992px upwards
        
      ]}
   
     
      >
          <Box bg=""w={[
        "50px", // base
        "50px", // 480px upwards
        "100px", // 768px upwards
        "100px", // 992px upwards
        
      ]} alignItems="center"  justifyContent="center" alignContent="center"> <img  src={props.img}/></Box>
   <Box fontWeight="">  {props.text}</Box>
    
    </Flex>
  );

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
                        
                    ><Text fontFamily="heading">Our Services</Text> </Box><Text textAlign="center" mt="5"  fontSize={["xs", "xl"]}>
                    Any type of website you need
                </Text>
                    
               
               
                <Flex flexDirection="row"
          flexWrap="wrap"
          bottom="0"
          width="100%"
          flex="1"
          justifyContent="center"
          py={2}>
             <MenuService img="building.png" text="Company Profile"/>
              <MenuService img="shop.png" text="Online Shop"/>
              <MenuService img="personal.png" text="Personal Website"/>
              <MenuService img="festival 1.png" text="Events"/>
              <MenuService img="many.png" text="Many More"/>

           

  </Flex>
            

              

              
               </Flex> 
               
                
        
        </Flex>



    </Flex>


);
};



export default Services;

