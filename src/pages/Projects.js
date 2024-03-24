import React from "react";
import Header from "../components/Header";
import projects from "../utils/projects";
import { Footer } from "../components";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Center,
  VStack,
  Grid,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <Header />
      <Box w="100%" color="#87A922">
        <Center bg="#9BCF53" h="20rem">
          <Center w="70%" bg="white" h="20rem">
            <VStack spacing={9}>
              <Heading fontSize="3xl" color="green">
                Our Projects
              </Heading>
              <Text fontSize="xl" color="green">
                Explore how we are moving sustainability forward through our
                global expertise and local implementation
              </Text>
            </VStack>
          </Center>
        </Center>
        <Flex justify="center" py="90px">
          <Box w="90%" bg="white">
            <Grid templateColumns="repeat(2, 1fr)" gap={7}>
              {projects.map((project) => {
                return (
                  <>
                    <Box
                      position="relative"
                      bgImage={project.image}
                      h="30rem"
                      backgroundSize="cover"
                      backgroundRepeat="no-repeat"
                      backgroundPosition="center"
                      key={project.id}
                    >
                      <Center
                        position="absolute"
                        right="0"
                        top="20"
                        w="70%"
                        h="20rem"
                        bg="white"
                      >
                        <VStack spacing="50px">
                          <Heading fontSize="2xl" as="b">
                            {project.name}
                          </Heading>
                          <Text>{project.location}</Text>
                          <Button colorScheme="green" variant="outline">
                            <Link to={`/project/${project.id}`}>Read More</Link>
                          </Button>
                        </VStack>
                      </Center>
                    </Box>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Projects;
