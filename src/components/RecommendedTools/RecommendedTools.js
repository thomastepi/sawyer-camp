import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Button,
  VStack,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import tools from "../../utils/tools";

const RecommendedTools = ({ category, limit = 3, showBrowseMore = true }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const filteredTools = tools
    .filter((tool) => tool.category.includes(category))
    .slice(0, limit);

  return (
    <Box py={10} px={4}>
      <Heading size="lg" color="green" mb={6}>
        Recommended Tools
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredTools.map((tool) => (
          <VStack
            key={tool.id}
            bg="gray.50"
            borderRadius="md"
            boxShadow="md"
            p={4}
            align="start"
          >
            <Image
              src={tool.img}
              alt={tool.name}
              borderRadius="md"
              h="200px"
              objectFit="cover"
              w="100%"
            />
            <Text fontWeight="bold" fontSize="lg">
              {tool.name}
            </Text>
            <ChakraLink
              href={tool.link}
              isExternal
              color="blue.500"
              fontWeight="semibold"
            >
              View on Amazon
            </ChakraLink>
          </VStack>
        ))}
      </SimpleGrid>

      {showBrowseMore && (
        <Box mt={10} textAlign={isMobile ? "center" : "left"}>
          <Button as={Link} to="/products" colorScheme="green" borderRadius="0">
            Browse More Tools
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RecommendedTools;
