import React from "react";
import { article } from "../utils/article";
import SharedLayout from "./SharedLayout";
import { Box, Heading, Text, Image, Center, VStack } from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const Article = () => {
  const isMobileView = useIsMobile();
  return (
    <>
      <SharedLayout>
        <Center mt="170px">
          <Box w={isMobileView ? "90%" : "70%"}>
            {article.map((item) => {
              return (
                <VStack
                  key={item.id}
                  bg="white"
                  w="100%"
                  p={4}
                  color="black"
                  alignItems="start"
                >
                  <Heading color="green">{item.title}</Heading>
                  <Image src={item.image} alt={item.alt} />
                  <Text color="#87A922">{item.date}</Text>
                  <Text>{item.content}</Text>
                </VStack>
              );
            })}
          </Box>
        </Center>
      </SharedLayout>
    </>
  );
};

export default Article;
