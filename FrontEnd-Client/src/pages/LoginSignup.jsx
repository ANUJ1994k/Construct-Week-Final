import React, { useState } from "react";
import { Box, Container, Image, Tabs, TabPanels, TabPanel, Input, Button, Text } from "@chakra-ui/react";

const LoginSignup = () => {
  const [value, setValue] = useState("first");

  return (
    <Container maxW="xl" centerContent m="55px">
      {/* Logo Container */}
      <Box mb="30px">
        <Image
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          width="50px"
          alt="ASOS Logo"
        />
      </Box>

      <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
        <Tabs.List style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Tabs.Trigger value="first" width="50%">JOIN</Tabs.Trigger>
          <div style={{ width: "1px", height: "35px", background: "grey" }} />
          <Tabs.Trigger value="second" width="50%">SIGN IN</Tabs.Trigger>
        </Tabs.List>

        <TabPanels>
          <TabPanel>
            <label>EMAIL ADDRESS:
              <Input placeholder="Enter your email" size="md" />
            </label>
            <label>PASSWORD:
              <Input placeholder="Enter your password" size="md" />
            </label>
          </TabPanel>

          <TabPanel>
            <label>EMAIL ADDRESS:
              <Input placeholder="Enter your email" size="sm" />
            </label>
            <label>PASSWORD:
              <Input placeholder="Enter your password" size="sm" />
            </label>
            <Button p="15px" w="sm" m="15px">SIGN IN</Button><br />
            <Button p="15px" mt="30px" border="none" bg="white" color="black" _hover={{ bg: "gray.100" }}>Forgot password?</Button>
            <Text fontSize="xl">Or sign in with...</Text>
            <Box>
              <Button><Text>Click Me</Text> </Button>
              <Button><Text>Click Me</Text> </Button>
              <Button><Text>Click Me</Text> </Button>
            </Box>
            <Text fontSize="xl" cursor="pointer" color="black" _hover={{ color: "gray.400", textDecoration: "underline" }}>
              Where Has Twitter Gone?
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs.Root>
    </Container>
  );
};

export default LoginSignup;
