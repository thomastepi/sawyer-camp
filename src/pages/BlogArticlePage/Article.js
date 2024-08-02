import React from "react";
import { article } from "../../utils/article";
import MainLayout from "../../layouts/MainLayout";
import { Box, Heading, Text, Image, Center, VStack } from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";
import { useParams } from "react-router-dom";

const Article = () => {
  const isMobileView = useIsMobile();
  const { articleId } = useParams();
  const id = parseInt(articleId);
  return (
    <>
      <MainLayout>
        <Center mt="25px">
          <Box w={isMobileView ? "90%" : "70%"}>
            {article.map((item) => {
              if (item.id === id) {
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
                    <Box>
                      <Image src={item.image} alt={item.alt} />
                    </Box>
                    <Text color="#87A922">{item.date}</Text>
                    <Box>{item.content}</Box>
                  </VStack>
                );
              } else {
                return null;
              }
            })}
          </Box>
        </Center>
      </MainLayout>
    </>
  );
};

export default Article;
