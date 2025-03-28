import React, { useState } from "react";
import { Box, Flex, Button,Text ,Link} from "@chakra-ui/react";
import { FaUser, FaClipboardList, FaUndo, FaEnvelope } from "react-icons/fa";

const IconDetails = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Box
      width="250px"
      minHeight="150px"
      backgroundColor="white"
      boxShadow="md"
      p="4"
      position="relative"
    >
      <Flex justifyContent="flex-end">
        <Button size="xs" variant="ghost" onClick={() => setIsVisible(false)}>
        <Button size="xs" variant="ghost" onClick={() => setIsVisible(false)}>
  ✖
</Button>
        </Button>
      </Flex>
      
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button variant="ghost" className="Icon-btn">Sign In</Button>
        <Box borderBottom="1px solid gray" my={2} />
        <Button variant="ghost" className="Icon-btn">Join</Button>
      </Flex>
      
      <Box borderBottom="1px solid gray" my={2} />


      <Flex direction="column" gap={3}>
        <Flex alignItems="center" gap={2}>
          <FaUser />
          <Link><Text>My Account</Text></Link>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <FaClipboardList />
          <Link><Text>My Orders</Text></Link>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <FaUndo />
          <Link><Text>Return Information</Text></Link>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <FaEnvelope />
          <Link><Text>Contact Preferences</Text></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IconDetails;
