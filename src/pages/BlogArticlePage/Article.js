import React from "react";
import { article } from "../../utils/article";
import {
  Box,
  Heading,
  Text,
  Image,
  Center,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";
import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import RecommendedTools from "../../components/RecommendedTools/RecommendedTools";

const Article = () => {
  const isMobileView = useIsMobile();
  const navigate = useNavigate();
  const { articleId } = useParams();
  const id = parseInt(articleId);

  const currentArticle = article.find((item) => item.id === id);
  const otherArticles = article.filter((item) => item.id !== id).slice(0, 3);

  if (!currentArticle) {
    return (
      <ErrorPage
        heading="Article Not Found"
        text="Sorry, the article you are looking for does not exist"
        btnText="Back to Blog"
        btnLink="/blog"
      />
    );
  }

  return (
    <>
      <Center mt="25px" color="#87A922">
        <Box w={isMobileView ? "90%" : "70%"}>
          <VStack
            bg="white"
            w="100%"
            p={4}
            color="black"
            alignItems="start"
            spacing={6}
          >
            <Heading color="green">{currentArticle.title}</Heading>
            <Box>
              <Image
                src={currentArticle.image}
                alt={currentArticle.alt}
                borderRadius="md"
              />
            </Box>
            <Text color="#87A922">{currentArticle.date}</Text>
            <Box>{currentArticle.content}</Box>
            {currentArticle.showTools && <RecommendedTools category="gardening" />}
          </VStack>

          <Box m="70px 0">
            <Heading size="lg" mb={6} color="green">
              Other Articles
            </Heading>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {otherArticles.map((item) => (
                <GridItem
                  key={item.id}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  cursor="pointer"
                  onClick={() => navigate(`/article/${item.id}`)}
                  _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    h="180px"
                    w="100%"
                    objectFit="cover"
                    borderRadius="md"
                    mb={3}
                  />
                  <Text fontSize="sm" color="gray.600">
                    {item.date}
                  </Text>
                  <Heading noOfLines={2} size="md" mt={2} mb={1}>
                    {item.title}
                  </Heading>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Article;
