import React, { useState } from "react";
import "./Navbar.css";
import asos from "../../assets/asos.svg";
import {
  Flex,
  Box,
  Input,
  Button,
  IconButton,
  useDisclosure,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu } from "react-icons/bi";
import IconDetails from "../../pages/IconDetails";

export const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  return (
    <>
      {/* Topbar */}
      <Box width="100%" minHeight="40px" backgroundColor="white" color={"gray.700"} >
        <Flex direction="row" justifyContent="flex-end" marginRight="5%">
          <ButtonGroup size="sm" isAttached>
            <Button className="topbar-btn">Help & FAQs</Button>
            <Button className="topbar-btn">
              <Image src="./src/assets/in.png" width="15px" alt="Icon" />
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>

      {/* Navbar */}
      <Flex
        as="nav"
        className="Navbar"
        justify="space-between"
        align="center"
        padding={{ base: "10px 20px", md: "15px 50px" }}
        height="12vh"
        backgroundColor="gray.800"
        color="white"
        fontWeight="bold"
        wrap="nowrap" // Prevent wrapping
      >
        {/* Logo Section */}
        <Flex align="center" paddingRight="15px" color="whiteAlpha.900">
          <Flex align="center" paddingRight="15px">
            <Flex align="center" paddingRight="15px">
              <img src={asos} alt="ASOS Logo" width="100px" style={{ filter: "invert(1)" }} />
            </Flex>
          </Flex>
        </Flex>

        {/* Search Input & Menu Links */}
        <Flex flex="1" align="center" justify="center" gap={5} maxW="60%">
          <Flex paddingX="15px">WOMEN</Flex>
          <Flex paddingX="15px">MEN</Flex>

          {/* Search Bar */}
          <Flex
            position="relative"
            align="center"
            border="1px solid gray"
            borderRadius="full"
            width="100%"
            maxW="500px"
            bg="white"
            overflow="hidden"
          >
            <Input
              type="search"
              placeholder="Search items and brands"
              aria-label="Search items and brands"
              border="none"
              focusBorderColor="transparent"
              paddingLeft="15px"
              paddingRight="40px"
              width="100%"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Box as="button" position="absolute" right="10px" top="50%" transform="translateY(-50%)" backgroundColor={"white"}>
              <BiSearch color="gray.400" size={20} />
            </Box>
          </Flex>
        </Flex>

        {/* Icons */}
        <Flex gap={4} align="center">
          <Box position="relative" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
            <BiUser className="icon" size={24} color="white" />

            {/* Show IconDetails below BiUser when hovered */}
            {showDetails && (
              <Box
                position="absolute"
                top="30px" // Adjusted so it appears just below the icon
                left="50%"
                transform="translateX(-50%)"
                backgroundColor="white"
                color="black"
                padding={3}
                borderRadius="md"
                boxShadow="md"
                zIndex={10}
                width="250px"
                height="250px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <IconDetails isVisible={isVisible} setIsVisible={setIsVisible} />
              </Box>
            )}
          </Box>
          <BiHeart size={24} color="white" />
          <BiShoppingBag size={24} color="white" />
        </Flex>

        {/* Mobile Menu */}
        <IconButton
          aria-label="Open Menu"
          icon={<BiMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          background="none"
          color="white"
        />
      </Flex>

      {/* Offer Section */}
      <Flex
        direction="row"
        justifyContent="space-between"
        backgroundColor="#000000"
        color="whiteAlpha.900"
        padding={-5}
        alignItems="center"
      >
        <Button size="xs" padding={3} border="2px solid white" mx={10} backgroundColor={"black"} color={"white"}>
          WOMEN
        </Button>

        <Box position="relative" textAlign="center">
          <Text
            textStyle="sm"
            padding={5}
            onMouseEnter={() => setShowDiv(true)}
            onMouseLeave={() => setShowDiv(false)}
            cursor="pointer"
            textAlign="center"
          >
            20% OFF OCCASIONWEAR* <br/>With code: DRESSUP
          </Text>
          {showDiv && (
            <Box
              fontSize="sm"
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              backgroundColor="white"
              color="black"
              padding={5}
              borderRadius="md"
              boxShadow="md"
              width="2xl"
              textAlign="center"
              zIndex={10}
            >
              <Text fontSize="xs">
                Limited time only. While stocks last. Selected styles marked down on site.
              </Text>
              <Text fontSize="xs" marginTop={2}>
                *Enter code JUST4YOU at checkout to receive discount. Limited time
                only. Valid on full-price items only. Code can be used one time per
                customer up to a maximum pre-discount spend of £500/€690 per order.
                Can't be used with other promo codes or on gift vouchers, delivery
                charges, Premier Delivery or ASOS Marketplace. Country exclusions
                apply. Selected marked products excluded from promo.
              </Text>
            </Box>
          )}
        </Box>

        <Button size="sm" padding={3} border="2px solid white" mx={10} backgroundColor={"black"} color={"white"}>
          MEN
        </Button>
      </Flex>
    </>
  );
};
