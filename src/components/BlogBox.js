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
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { article } from "../utils/article";

const BlogBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bg="white" w="100%" p={4} color="black" boxShadow="md" rounded="md">
        <Heading color="green">Latest News</Heading>
        <Center justifyContent="start" mt="6">
          {article.map((item) => {
            return (
              <Card
                key={item.id}
                maxW="sm"
                bg="#D2E3C8"
                _hover={{ cursor: "pointer" }}
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
