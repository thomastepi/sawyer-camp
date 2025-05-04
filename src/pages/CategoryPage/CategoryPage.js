import React from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader/PageHeader";
import ScrollToHash from "../../components/utils/ScrollToHash";
import { useParams, Link } from "react-router-dom";
import tools from "../../utils/tools";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const categoryTools = tools.filter((tool) =>
    tool.category.includes(categoryName)
  );

  if (categoryTools.length === 0) {
    return (
      <>
        <PageHeader
          title="Recommended Farming Tools"
          image="https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg"
        />
        <ScrollToHash />
        <Box textAlign="center" py={10}>
          <Heading size="lg" color="red.500">
            No tools found in this category
          </Heading>
        </Box>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={categoryName.split("")[0].toUpperCase() + categoryName.slice(1)}
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg"
      />
      <ScrollToHash />
      <Box id="category" w={isMobile ? "90%" : "70%"} mx="auto" py="50px">
        <VStack spacing={6} align="start">
          <Heading size="lg" color="green" textTransform="capitalize">
            Tools in "{categoryName}" Category
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mt={10}>
          {categoryTools.map((tool) => (
            <Card key={tool.id} bg="#F1F5E3" boxShadow="md">
              <CardBody>
                <VStack spacing={4}>
                  <Image
                    src={tool.img}
                    alt={tool.name}
                    borderRadius="md"
                    w="100%"
                    h="200px"
                    objectFit="contain"
                    bg="white"
                  />
                  <Heading size="md">{tool.name}</Heading>
                  <Button
                    as="a"
                    href={tool.link}
                    target="_blank"
                    colorScheme="green"
                    w="full"
                    borderRadius="0"
                  >
                    View on Amazon
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Box mt={10} textAlign="center"></Box>
        <Button
          as={Link}
          to="/products#products"
          colorScheme="green"
          variant="outline"
          borderRadius="0"
        >
          Browse By Category
        </Button>
      </Box>
    </>
  );
};

export default CategoryPage;
