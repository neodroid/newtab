import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Footer = props => {


    return (

        <footer >

            <Flex
                w="100%"
                bg="#333333"
                align="center"
                justify="center"
            >
                <Flex
                    width={[
                        "100%", // base
                        "100%", // 480px upwards
                        "100%", // 768px upwards
                        "75%", // 992px upwards
                    ]}
                    as="nav"
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                    padding="1.5rem"
                    bg="#333333"
                    color="#2F80ED"
                    position="absolut"
                    {...props}
                >
                    <Box mr={5} bg="" >
                        <Flex align="center" mr={5}
                        >
                            
                            <Heading as="h1" size="lg" ml="5" letterSpacing={".1rem"} color="white" fontFamily="default"> </Heading>
                        </Flex>
                    </Box>

                    <Box mr={5} bg="" textAlign="right"  
                    maxW={[
                        "100%", // base
                        "100%", // 480px upwards
                        "40%", // 768px upwards
                        "75%", // 992px upwards
                    ]}>
                        <Flex align="center" mr={5}
                        >
                            <Text as="nav"
                                my={8}
                                fontFamily="default"
                            >
                                <Flex
                                    as="nav"
                                    fontWeight="bold"
                                    flexDirection="row-reverse"

                                >

                                    <ChakraLink href="" isExternal >
                                        <Box
                                            width="30px"
                                            h="30px"
                                            m="1"
                                        ><img src="/sos ig.png" /></Box>
                                    </ChakraLink>



                                    <ChakraLink href="" isExternal >
                                        <Box
                                            width="30px"
                                            h="30px"
                                            m="1"
                                        ><img src="/sos line.png" /></Box>
                                    </ChakraLink>



                                    <ChakraLink href="" isExternal>
                                        <Box
                                            width="30px"
                                            h="30px"
                                            m="1"
                                        ><img src="/sos twit.png" /></Box>
                                    </ChakraLink>
                                    <ChakraLink href="" isExternal>
                                        <Box
                                            width="30px"
                                            h="30px"
                                            m="1"
                                        ><img src="/sos yutub.png" /></Box>
                                    </ChakraLink>


                                </Flex>
                                <Heading as="h1" size="xs" ml="5" letterSpacing={".1rem"} color="white" fontFamily="default">
                                    &copy; NewTab.id | All Right Reserved
          </Heading>
                                
                            </Text>


                        </Flex>
                    </Box>


                </Flex>
            </Flex>
        </footer>
    );
};

export default Footer;
