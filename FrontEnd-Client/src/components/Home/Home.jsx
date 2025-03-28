import React from "react";
import { Flex, Button, Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
  // Responsive values
  const buttonWidth = useBreakpointValue({ base: "140px", md: "180px" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const buttonSpacing = useBreakpointValue({ base: "10px", md: "20px" });
  const bottomPosition = useBreakpointValue({ base: "5%", md: "10%" });
  const leftPosition = useBreakpointValue({ base: "50%", md: "51%" });
  const imgHeight = useBreakpointValue({ base: "300px", sm: "400px", md: "auto" });
  const imageWidth = useBreakpointValue({ base: "100%", sm: "48%", md: "25%" });
  const buttonAlign = useBreakpointValue({ base: "center", md: "flex-start" });

  return (
    <>
      {/* Hero Banner */}
      <Box position="relative" width="100%" height={imgHeight} overflow="hidden">
        <Box
          as="img"
          src="./src/assets/gbl_generic_desktop_1440x698.avif"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Banner"
        />

        {/* Buttons positioned above the footer */}
        <Flex
          position="absolute"
          bottom={bottomPosition}
          left={leftPosition}
          transform="translateX(-50%)"
          flexDirection={flexDirection}
          gap={buttonSpacing}
        >
          <Button width={buttonWidth} bg="white" color="black" _hover={{ bg: "black", color: "white", fontWeight: "bold" }}>
            SHOP WOMENS
          </Button>
          <Button width={buttonWidth} bg="white" color="black" _hover={{ bg: "black", color: "white", fontWeight: "bold" }}>
            SHOP MENS
          </Button>
        </Flex>
      </Box>

      {/* Image Grid Section */}
      <Box margin="auto" mt={5} width="100%">
        <Flex justifyContent="center" wrap="nowrap" gap="5px">
          {["2024_landing_page_propositions_01_870x555.avif", "2024_landing_page_propositions_02_870x555.avif",
            "2024_landing_page_propositions_03_ca_870x555.avif", "2024_landing_page_propositions_04_870x555.png"]
            .map((img, index) => (
              <Image key={index} src={`./src/assets/${img}`} width={imageWidth} objectFit="cover" />
          ))}
        </Flex>
      </Box>

      {/* Title Section */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={10}>
        The Biggest Labels
      </Text>

      {/* Womens Category */}
      <Box mt={10} width="auto">
        <Flex justifyContent="center" wrap="nowrap" gap="21px">
          {["promo_bau_hp_ww_02---v2.avif", "promo_bau_hp_ww_04.avif",
            "promo_bau_hp_ww_01v2.avif", "promo_bau_hp_ww_03.avif"]
            .map((img, index) => (
              <Image key={index} src={`./src/assets/${img}`} width={imageWidth} objectFit="cover" />
          ))}
        </Flex>
      </Box>

      {/* Women's Shop Button */}
      <Flex justifyContent={buttonAlign} mt={10}>
        <Button
          width="220px"
          fontWeight="medium"
          lineHeight="22px"
          maxHeight="44px"
          whiteSpace="normal"
          textAlign="center"
          bg="white"
          color="black"
          border="2px solid"
          padding="30px"
          mx="auto"
          _hover={{ bg: "black", color: "white", fontWeight: "bold" }}
        >
          SHOP WOMEN'S <br /> BRAND
        </Button>
      </Flex>

      {/* Mens Category */}
      <Box mt={10} width="auto">
        <Flex justifyContent="center" wrap="nowrap" gap="21px">
          {["promo_bau_hp_mw_02---v2.avif", "promo_bau_hp_mw_01.avif",
            "promo_bau_hp_mw_03.avif", "promo_bau_hp_mw_04.webp"]
            .map((img, index) => (
              <Image key={index} src={`./src/assets/${img}`} width={imageWidth} objectFit="cover" />
          ))}
        </Flex>
      </Box>

      {/* Men's Shop Button */}
      <Flex justifyContent={buttonAlign} mt={10}>
        <Button
          width="220px"
          fontWeight="medium"
          lineHeight="22px"
          maxHeight="44px"
          whiteSpace="normal"
          textAlign="center"
          bg="white"
          color="black"
          border="2px solid"
          padding="30px"
          mx="auto"
          _hover={{ bg: "black", color: "white", fontWeight: "bold" }}
        >
          SHOP MEN'S <br /> BRAND
        </Button>
      </Flex>
    </>
  );
};

export default Home;
