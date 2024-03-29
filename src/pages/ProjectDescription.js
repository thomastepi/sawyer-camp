import React from "react";
import { useParams } from "react-router-dom";
import projects from "../utils/projects";
import { Footer, Header } from "../components";
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
import useIsMobile from "../hooks/useIsMobile";

const ProjectDescription = () => {
  const isMobileView = useIsMobile();
  const { projectId } = useParams();
  const parsedProjectId = parseInt(projectId);

  const projectIndex = projects.findIndex(
    (project) => project.id === parsedProjectId
  );

  if (projectIndex === -1) {
    return <Text>Project not found</Text>;
  }

  const projectCount = projects.length;
  const prevProjectIndex = (projectIndex - 1 + projectCount) % projectCount;
  const nextProjectIndex = (projectIndex + 1) % projectCount;

  const project = projects[projectIndex];
  const { name, location, image, article } = project;

  return (
    <Box key={project.id}>
      <Header />
      <Center color="#87A922">
        <Box w={isMobileView ? "80%" : "50%"} py="50px">
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
                <Button leftIcon={<FontAwesomeIcon icon={faArrowCircleLeft} />}>
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
        </Box>
      </Center>
      <Footer />
    </Box>
  );
};

export default ProjectDescription;
