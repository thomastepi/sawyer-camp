import React from "react";
import {
  Box,
  Heading,
  VStack,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import tools from "../../utils/tools";
import PageHeader from "../../components/PageHeader/PageHeader";
import ScrollToHash from "../../components/utils/ScrollToHash";

const Products = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const categories = [...new Set(tools.flatMap((item) => item.category))];

  return (
    <>
      <PageHeader
        title="Recommended Farming Tools"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg"
      />
      <ScrollToHash />
      <Box
        id="products"
        w={isMobile ? "80%" : "70%"}
        mx="auto"
        py="50px"
        textAlign={isMobile ? "center" : "left"}
      >
        <VStack spacing={6} align="start">
          <Heading w="100%" size="lg" color="green">
            Browse by Category
          </Heading>
          <Text fontSize="lg" color="#87A922">
            These tools are listed through Amazon.com and are especially
            recommended for supporters in the diaspora who wish to donate or
            equip farming families back home in Banga-Bakundu, Cameroon. Your
            purchase may also support our work through affiliate commissions.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} mt={10}>
          {categories.map((cat) => (
            <Card
              key={cat}
              bg="#F1F5E3"
              boxShadow="md"
              _hover={{
                boxShadow: "lg",
                transform: "scale(1.02)",
                transition: "0.2s ease-in-out",
              }}
            >
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md" textTransform="capitalize">
                    {cat}
                  </Heading>
                  <Button
                    as={Link}
                    to={`/products/${cat}#category`}
                    colorScheme="green"
                    borderRadius="0"
                  >
                    View Tools
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Products;
