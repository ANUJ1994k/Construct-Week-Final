import React from 'react'
import './Footer.css'
import { Box, Flex, Icon, Text, Image, Container, SimpleGrid, Link, VStack, ButtonGroup,Button } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
      <Box backgroundColor="white" color="white" padding="20px 50px" borderTop="1px solid grey" marginTop={20}>
        <Flex justify="center" align="center" flexWrap="wrap">
          {/* Social Media Icons with Brand Background */}
          <Flex gap="15px" align="center" mx={"30px"}>
            {/* Facebook */}
            <Box
              backgroundColor="#1877F2" // Facebook Blue
              padding="10px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaFacebookF} boxSize={6} color="white" cursor="pointer" />
            </Box>

            {/* Instagram */}
            <Box
              background="linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)" // Instagram Gradient
              padding="10px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaInstagram} boxSize={6} color="white" cursor="pointer" />
            </Box>

            {/* Snapchat */}
            <Box
              backgroundColor="#FFFC00" // Snapchat Yellow
              padding="10px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaSnapchatGhost} boxSize={6} color="black" cursor="pointer" />
            </Box>
          </Flex>

          {/* Vertical Line */}
          <Text fontSize="xl" color="gray.400"> | </Text>

          {/* Payment Icons */}
          <Flex gap="30px" align="center" justifyContent={'space-between'} mx={"30px"}>
            <Icon as={FaCcVisa} boxSize={8} color="#1A1F71" />  {/* Visa Blue */}
            <Icon as={FaCcMastercard} boxSize={8} color="#EB001B" />  {/* Mastercard Red */}
            <Icon as={FaCcPaypal} boxSize={8} color="#003087" />  {/* PayPal Blue */}
            <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" width="25px" borderRadius={"2px"} />
          </Flex>
        </Flex>
      </Box>

      <Box bg="gray.100" color="gray.700">
        <Container maxW="container.2xl" maxH={'500px'} padding={5}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} p={3} fontFamily="sans-serif">

            <Box textStyle="lg">
              <VStack align="start" spacing={1}><Text textStyle="md" fontWeight={"bold"} >Help & Information</Text>
                {["Help", "Track order", "Delivery & returns", "Sitemap"].map((item) => (
                  <Link key={item} href="#" textStyle="xs" _hover={{ color: "lightblue" }}>
                    {item}
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box textStyle="lg">
              <Text fontWeight="bold" mb={2}>About ASOS</Text>
              <VStack align="start" spacing={1}>
                {["About us", "Careers at ASOS", "Corporate Responsibility", "Investor's site"].map((item) => (
                  <Link key={item} href="#" textStyle="xs" _hover={{ color: "lightblue" }}>
                    <Text>{item}</Text>
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box textStyle="lg">
              <Text fontWeight="bold" mb={2}>More From ASOS</Text>
              <VStack align="start" spacing={1}>
                {["Mobile and ASOS apps", "Gift vouchers", "Black Friday", "ASOS x Thrift+"].map((item) => (
                  <Link key={item} href="#" textStyle="xs" _hover={{ color: "lightblue" }}>
                    <Text>{item}</Text>
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box textStyle="lg">
              <Text fontWeight="bold" mb={2}>Shopping from:</Text>
              <Link href="#" textStyle="xs" _hover={{ color: "lightblue" }}>
                <Text display={"flex"}>You're in India <span><Image src='./src/assets/in.png' width="15px" alt="Icon" /></span>| Change</Text>
              </Link>
              <Text textStyle="xs" mt={2}>Some of our international sites:</Text>
              <Box display="flex" flexWrap="wrap" gap={5} mt={2} maxWidth="50%">
                {["es", "de", "au", "fr", "us", "dk", "it", "nl", "pl", "se"].map((code) => (
                  <Image key={code} src={`https://assets.asosservices.com/storesa/images/flags/${code}.png`} alt={code} boxSize="100px" width="4%" height="2%" />
                ))}
              </Box>
            </Box>

          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.2xl" maxH="100px" py={2} bg="gray.200">
      <Flex justify="space-between" align="center">
        <Box>
          <Text>© 2025 ASOS</Text>
        </Box>
        <Box>
          <ButtonGroup spacing={4}>
            <Link href="#" textDecoration="none">
              <Button variant="link">Privacy & Cookies</Button>
            </Link>
            <Link href="#" textDecoration="none">
              <Button variant="link">Ts&Cs</Button>
            </Link>
            <Link href="#" textDecoration="none">
              <Button variant="link">Accessibility</Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Flex>
    </Container>
    </>


  )
}
