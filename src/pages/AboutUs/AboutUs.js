import React from "react";
import FixedBg from "../../components/FixedBackground/FixedBg";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/about-us.jpg";

const AboutUs = () => {
  const isMobileView = useIsMobile();
  return (
    <>
      <PageHeader image={img} title="About Us" />
      <FixedBg
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg"}
      />
      <Box display="block" align="center">
        <Box bg="white">
          <Center py="60px" w={isMobileView ? "90%" : "50%"} color="green">
            <VStack>
              <Text color="#87A922" fontSize="2xl" py={5}>
                Founded in 1989 by Mr. Emmanuel Atud, Sawyer Camp Farmers CIG
                was born out of a vision to empower rural communities through
                sustainable agriculture. With a Master's degree in Agricultural
                Economics from the University of Illinois, Mr. Atud recognized
                the transformative power of education, collaboration, and
                resource access in uplifting local farmers.
              </Text>
              <a href="#our-story">
                <Button colorScheme="green" variant="solid">
                  Read More
                </Button>
              </a>
            </VStack>
          </Center>
        </Box>

        <Heading color="white" align="center" mt="70px" size="3xl">
          Building a Sustainable Future Together
        </Heading>
        <Box
          w={isMobileView ? "80%" : "50%"}
          color="#87A922"
          bg="white"
          p="20px"
          mt="70px"
        >
          <Text fontSize="2xl">
            At Sawyer Camp Farmers CIG, we are committed to empowering local
            farmers with sustainable agricultural practices that drive economic
            growth and environmental responsibility. Through education,
            collaboration, and resource access, we cultivate thriving
            communities that produce high-quality, market-ready crops.
          </Text>
        </Box>

        <Box
          bg="white"
          id="our-story"
          display="flex"
          justifyContent="center"
          color="#87A922"
          mt="70px"
          py="100px"
          zIndex="1"
          w="100%"
        >
          <Box align="left" w={isMobileView ? "90%" : "70%"}>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              w="100%"
            >
              <GridItem w="100%" py="30px">
                <Text fontSize="lg">
                  For years, our rural communities faced mounting challenges;
                  climate change, biodiversity loss, and rural poverty. Farmers
                  struggled to sustain their livelihoods, and the future of our
                  land was at risk. Instead of standing by, we took action. As a
                  united community-based organization, Sawyer Camp Farmers CIG
                  turned these challenges into opportunities, equipping farmers
                  with the tools and knowledge to adapt, grow, and prosper.
                  <br />
                  <br />
                  Today, Sawyer Camp Farmers CIG is a thriving collective of
                  dedicated farmers. Not only have we overcome the obstacles of
                  the past, but we are now leaders in sustainable agriculture,
                  driving economic prosperity while preserving our environment.
                  Our commitment to responsible farming ensures high-quality
                  cash crops that contribute to national food security and
                  economic stability. As we continue to grow, we invite farmers,
                  partners, and supporters to join us in shaping a more
                  sustainable and empowered future.
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                bgImage="https://ik.imagekit.io/thormars/Sawyer-Camp/SC-cassava4.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                py="10rem"
              ></GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
