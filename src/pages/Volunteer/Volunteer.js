import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { PopupButton } from "@typeform/embed-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import useIsMobile from "../../hooks/useIsMobile";
import { roles } from "../../utils/roles";

const Volunteer = () => {
  const isMobileView = useIsMobile();
  const id = process.env.REACT_APP_TYPEFORM_ID_VOLUNTEER;

  return (
    <>
      <PageHeader
        title="Volunteer with Us"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/farm-women.jpg"
      />
      <Box color="#87A922" p="20px">
        <VStack
          spacing={8}
          m="0 auto"
          w={isMobileView ? "95%" : "70%"}
          py="65px"
        >
          <Heading align="center" color="green">
            Join Our Mission
          </Heading>
          <Text fontSize="2xl" align="center">
            Volunteers are the backbone of our efforts at SCF-CIG. By donating
            your time and skills, you can help us make a significant impact in
            our community.
          </Text>
        </VStack>
      </Box>
      <Box bg="#789461" color="white" py="100px">
        <VStack spacing={8} m="0 auto" w="90%">
          <Heading fontSize="3xl" align="center">
            How You Can Help
          </Heading>
          <Text fontSize="xl" align="center">
            We have a variety of volunteer opportunities that match different
            skills and interests. Whether you can offer a few hours a week or a
            full day, your contribution is valuable.
          </Text>
          <Center w="100%">
            <Grid
              templateColumns={{
                base: "auto",
                md: "auto auto",
                lg: "auto auto auto",
              }}
              gap={6}
              w="90%"
              justifyContent={"center"}
            >
              {roles.map((role) => {
                return (
                  <GridItem key={role.id}>
                    <Card
                      maxW="sm"
                      bg="gray.800"
                      color="white"
                      h="400px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <CardBody>
                        <VStack spacing={3} h="100%">
                          <Box h="180px" w="100%">
                            <Image
                              src={role.img}
                              alt={role.alt}
                              objectFit="cover"
                              borderRadius="lg"
                              w="100%"
                              h="100%"
                            />
                          </Box>
                          <Heading size="md" textAlign="center">
                            {role.title}
                          </Heading>
                          <Text fontSize="lg" textAlign="center" noOfLines={4}>
                            {role.description}
                          </Text>
                        </VStack>
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              })}
            </Grid>
          </Center>
        </VStack>
      </Box>
      <Box color="#87A922" py="50px">
        <VStack spacing={8} m="0 auto" w={isMobileView ? "95%" : "70%"}>
          <Heading size="2xl" align="center" color="green">
            Ready to Make a Difference?
          </Heading>
          <Text fontSize="xl" align="center">
            Sign up today to become a volunteer and join us in creating a
            sustainable future for our community.
          </Text>
          <Button as="div" borderRadius="0" p="25px" colorScheme="green">
            <PopupButton id={id} style={{ fontSize: 20 }} className="my-button">
              Sign Up To Volunteer
            </PopupButton>
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Volunteer;
