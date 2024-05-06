import React from "react";
import { FixedBg, SharedLayout } from "../components";
import { Box, Text, Heading, Button, VStack, Center } from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const AboutUs = () => {
  const isMobileView = useIsMobile();
  return (
    <SharedLayout>
      <Box>
        <FixedBg
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg"}
        />
        <Box display="block" align="center">
          <Box bg="white" pt="130px">
            <Center py="100px" w={isMobileView ? "90%" : "50%"} color="green">
              <VStack>
                <Heading align="center">Our Story</Heading>
                <Text color="#87A922" fontSize="2xl" py={5}>
                  Our story began in 1989, rooted in the vision of Mr. Emmanuel
                  Atud. Armed with a Master's degree in Agricultural Economics
                  from the University of Illinois, he embarked on a mission to
                  empower our community.
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
          <Box>
            <Box
              w={isMobileView ? "90%" : "50%"}
              color="#87A922"
              bg="white"
              p="30px"
              mt="70px"
            >
              <Box align="center">
                <Text fontSize="2xl" p={5}>
                  At Sawyer Camp, we empower local farmers with sustainable
                  practices, nurturing a future of economic growth and
                  environmental stewardship. Collaboration, education, and
                  resource access are the cornerstones of our mission: thriving
                  communities delivering high-quality produce.
                </Text>
              </Box>
            </Box>

            <Box bg="white" bgSize="cover" bgPos="center">
              <Box
                id="our-story"
                display="flex"
                justifyContent="center"
                color="#87A922"
                mt="70px"
                py="70px"
                zIndex="1"
                w="70%"
              >
                <Box align="left" w={isMobileView ? "90%" : "70%"}>
                  <Text fontSize={isMobileView ? "lg" : "2xl"}>
                    Sawyer Camp Farmers CIG rose to the challenge of
                    safeguarding our rural communities. Climate change,
                    biodiversity loss, and rural poverty threatened the
                    livelihoods of our farmers and the future of our land.
                    Determined to find a solution, we united as a
                    community-based organization.
                    <br />
                    <br />
                    Today, Sawyer Camp Farmers CIG is a flourishing union of
                    farmers. We've not only mitigated those initial challenges,
                    but we're also fostering economic prosperity and
                    environmental responsibility. Our unwavering dedication to
                    sustainable practices cultivates a thriving ecosystem and
                    high-quality cash crops that have become a staple in the
                    national market.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default AboutUs;
