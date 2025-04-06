import React from "react";
import { Flex, Button, Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import banner from '../assets/gbl_generic_desktop_1440x698.avif';
import img1 from '../assets/2024_landing_page_propositions_01_870x555.avif';
import img2 from '../assets/2024_landing_page_propositions_02_870x555.avif';
import img3 from '../assets/2024_landing_page_propositions_03_ca_870x555.avif';
import img4 from '../assets/2024_landing_page_propositions_04_870x555.png';
import promoImg1 from '../assets/promo_bau_hp_mw_02---v2.avif';
import promoImg2 from '../assets/promo_bau_hp_mw_01.avif';
import promoImg3 from '../assets/promo_bau_hp_mw_03.avif';
import promoImg4 from '../assets/promo_bau_hp_mw_04.webp';
import promoImg5 from '../assets/promo_bau_hp_ww_02---v2.avif';
import promoImg6 from '../assets/promo_bau_hp_ww_04.avif';
import promoImg7 from '../assets/promo_bau_hp_ww_01v2.avif';
import promoImg8 from '../assets/promo_bau_hp_ww_03.avif';



const promoImages = [
  promoImg5,
  promoImg6,
  promoImg7,
  promoImg8
];

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
          src={banner}
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
      <Box margin="auto" mt={5} width="100%" backgroundColor={"whiteAlpha.900"}>
  <Flex justifyContent="center" wrap="nowrap" gap="5px">
    {[img1, img2, img3, img4].map((img, index) => (
      <Image key={index} src={img} width={imageWidth} objectFit="cover" />
    ))}
  </Flex>
</Box>

      {/* Title Section */}
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={10} >
        The Biggest Labels
      </Text>

      {/* Womens Category */}
      <Box mt={10} width="auto">
  <Flex justifyContent="center" wrap="nowrap" gap="21px">
    {promoImages.map((img, index) => (
      <Image key={index} src={img} width={imageWidth} objectFit="cover" />
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
    {[promoImg1, promoImg2, promoImg3, promoImg4].map((img, index) => (
      <Image key={index} src={img} width={imageWidth} objectFit="cover" />
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
