import React from "react";
import projects from "../../utils/projects";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
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

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/ridges.jpg";

const Projects = () => {
  return (
    <MainLayout>
      <Box w="100%" color="#87A922">
        <PageHeader image={img} title="Our Projects" />
        <Center bg="#789461" h="20rem">
          <Center w="70%" bg="white" h="20rem">
            <VStack spacing={9}>
              <Text align="center" fontSize="2xl">
                Discover our dedication to sustainability as we combine global
                insights with local action to drive positive change.
              </Text>
            </VStack>
          </Center>
        </Center>
        <Flex justify="center" py="90px">
          <Box w="90%" bg="white">
            <Grid
              css={{
                "@media (max-width: 768px)": {
                  gridTemplateColumns: "1fr",
                  gridGap: 20,
                },
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: 30,
              }}
            >
              {projects.map((project) => {
                return (
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
                      px="30px"
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
                );
              })}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default Projects;
