import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import projects from "../../utils/projects";
import {
  Box,
  Text,
  Image,
  VStack,
  Center,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  faArrowCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsMobile from "../../hooks/useIsMobile";

const ProjectDetail = () => {
  const isMobileView = useIsMobile();

  const navigate = useNavigate();

  const { projectId } = useParams();
  const parsedProjectId = parseInt(projectId);

  const projectIndex = projects.findIndex(
    (project) => project.id === parsedProjectId
  );

  const otherProjects = projects
    .filter((p) => p.id !== parsedProjectId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (projectIndex === -1 || typeof parsedProjectId !== "number") {
    return (
      <ErrorPage
        heading="Project Not Found"
        text="Sorry, the project you are looking for does not exist"
        btnText="Back to Projects"
        btnLink="/projects"
      />
    );
  }

  const projectCount = projects.length;
  const prevProjectIndex = (projectIndex - 1 + projectCount) % projectCount;
  const nextProjectIndex = (projectIndex + 1) % projectCount;

  const project = projects[projectIndex];
  const { name, location, image, article } = project;

  return (
    <>
      <Box key={project.id}>
        <Center color="#87A922">
          <Box w={isMobileView ? "80%" : "70%"} py="50px">
            <VStack spacing={7} align="left">
              <Link to="/projects">
                <Button leftIcon={<FontAwesomeIcon icon={faArrowCircleLeft} />}>
                  Back
                </Button>
              </Link>
              <Heading color="green">{name}</Heading>
              <Text>{location}</Text>
              <Image src={image} />
              <Heading color="green" size="md">
                About The Project
              </Heading>
              {article}
              <Flex justify="space-between">
                <Link to={`/project/${projects[prevProjectIndex].id}`}>
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faArrowCircleLeft} />}
                  >
                    Prev
                  </Button>
                </Link>
                <Link to={`/project/${projects[nextProjectIndex].id}`}>
                  <Button
                    rightIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
                  >
                    Next
                  </Button>
                </Link>
              </Flex>
            </VStack>

            <Box mt="70px">
              <Heading size="lg" mb={6} color="green">
                Other Projects
              </Heading>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "1fr 1fr",
                  lg: "repeat(3, 1fr)",
                }}
                gap={6}
              >
                {otherProjects.map((proj, index) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    style={{ width: "100%" }}
                  >
                    <GridItem
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate(`/project/${proj.id}`)}
                      bg="gray.100"
                      p={4}
                      borderRadius="md"
                      boxShadow="md"
                      cursor="pointer"
                      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                    >
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        h="180px"
                        w="100%"
                        objectFit="cover"
                        borderRadius="md"
                        mb={3}
                      />
                      <Text fontSize="sm" color="gray.600">
                        {proj.location}
                      </Text>
                      <Heading noOfLines={2} size="md" mt={2} mb={1}>
                        {proj.name}
                      </Heading>
                    </GridItem>
                  </motion.div>
                ))}
              </Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default ProjectDetail;
