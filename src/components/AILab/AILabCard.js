import {
  Box,
  Heading,
  Text,
  Image,
  AspectRatio,
  HStack,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const AILabCard = ({ tool }) => {
  const cardBg = "white";
  const cardBorder = "gray.200";
  const subtleText = "gray.600";
  const titleColor = "gray.900";

  return (
    <Box
      as={Link}
      to={tool.link}
      role="group"
      borderWidth="1px"
      borderColor={cardBorder}
      borderRadius="2xl"
      overflow="hidden"
      bg={cardBg}
      transition="all 0.25s ease"
      _hover={{
        shadow: "xl",
        transform: "translateY(-6px)",
      }}
      display="flex"
      flexDirection="column"
    >
      <Box position="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={tool.imageUrl}
            alt={tool.title}
            objectFit="cover"
            _groupHover={{ transform: "scale(1.03)" }}
            transition="transform 0.3s ease"
          />
        </AspectRatio>

        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-t, rgba(0,0,0,0.55), rgba(0,0,0,0.05))"
          opacity={0.75}
        />

        <Box position="absolute" bottom={3} left={3} right={3}>
          <HStack spacing={2} mb={2} flexWrap="wrap">
            {tool.category && (
              <Tag size="sm" colorScheme="purple" borderRadius="full">
                {tool.category}
              </Tag>
            )}
            {tool.level && (
              <Tag
                size="sm"
                variant="subtle"
                colorScheme="green"
                borderRadius="full"
              >
                {tool.level}
              </Tag>
            )}
            {tool.status && (
              <Tag
                size="sm"
                variant="outline"
                colorScheme="yellow"
                borderRadius="full"
              >
                {tool.status}
              </Tag>
            )}
          </HStack>

          <Heading size="md" color="white">
            {tool.title}
          </Heading>
        </Box>
      </Box>

      <Box p={5} flex="1">
        <Text fontSize="sm" color={subtleText} mb={3}>
          {tool.description}
        </Text>

        {tool.highlight && (
          <Text fontSize="xs" color={subtleText} mb={4}>
            💡 {tool.highlight}
          </Text>
        )}

        {tool.useCases && tool.useCases.length > 0 && (
          <Box mt={1}>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              color={subtleText}
              mb={1}
            >
              Best for
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              {tool.useCases.map((useCase) => (
                <Tag
                  key={useCase}
                  size="sm"
                  variant="subtle"
                  borderRadius="full"
                >
                  {useCase}
                </Tag>
              ))}
            </HStack>
          </Box>
        )}
      </Box>

      <Flex
        as="footer"
        align="center"
        justify="space-between"
        px={5}
        py={4}
        borderTopWidth="1px"
        borderColor={cardBorder}
      >
        <Text fontSize="sm" fontWeight="medium" color={titleColor}>
          Open tool
        </Text>
        <ArrowForwardIcon
          boxSize={5}
          _groupHover={{ transform: "translateX(4px)" }}
          transition="transform 0.2s ease"
        />
      </Flex>
    </Box>
  );
};

export default AILabCard;
