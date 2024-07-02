import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Heading,
  Card,
  CardBody,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { article } from "../utils/article";

const BlogBox = ({ title, subtitle, bgColor }) => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <>
      <Box
        bg={bgColor || "#FFF"}
        w="100%"
        p={4}
        color="black"
        boxShadow="md"
        rounded="md"
      >
        <Heading size="2xl" align="center" color="green" py={title && "9"}>
          {title}
        </Heading>
        {subtitle && (
          <Text color="#87A922" align="center">
            {subtitle}
          </Text>
        )}
        <Center mt="6" gap="6" flexDir={isMobile && "column"}>
          {article.map((item) => {
            return (
              <Card
                key={item.id}
                maxW="sm"
                bg="#D2E3C8"
                _hover={{
                  cursor: "pointer",
                  opacity: "0.8",
                  padding: "0.2rem",
                  transition: "0.5s",
                }}
                onClick={() => navigate(`/article/${item.id}`)}
              >
                <CardBody>
                  <Stack mt="3" spacing="1">
                    <Image
                      src={item.image}
                      alt="fire harzard"
                      borderRadius="lg"
                    />
                    <Text>{item.date}</Text>
                    <Text
                      as={Link}
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                      color="blue"
                    >
                      {item.title}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Center>
      </Box>
    </>
  );
};

export default BlogBox;
