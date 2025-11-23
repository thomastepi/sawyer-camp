import {
  Box,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Flex,
  Badge,
  Divider,
} from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AILabCard from "../../components/AILab/AILabCard";
import { aiLabTools } from "../../utils/aiLab";

const AILab = () => {
  const sectionBg = "white";
  const subtleText = "gray.600";

  return (
    <Box minH="100vh" bg={"gray.50"}>
      <PageHeader
        title="AI Lab"
        bg="gray.700"
        imageUrl="https://images.unsplash.com/photo-1620712943543-285f7266c888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />

      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
        color="#87A922"
      >
        <Stack
          spacing={6}
          mb={10}
          p={{ base: 5, md: 8 }}
          borderRadius="2xl"
          bg={sectionBg}
          boxShadow="sm"
        >
          <Flex
            justify="space-between"
            align={"flex-start"}
            gap={4}
            flexDir={"column"}
          >
            <Stack spacing={3} maxW={{ base: "full", md: "60%" }}>
              <Badge
                alignSelf="flex-start"
                colorScheme="green"
                borderRadius="full"
                px={3}
                py={1}
                textTransform="none"
                fontWeight="semibold"
              >
                Farmer-focused AI
              </Badge>

              <Heading size="lg" color="green">
                Discover AI tools crafted for sustainable farming
              </Heading>

              <Text fontSize="md" color={subtleText}>
                The AI Lab is a collection of experimental tools built to
                support Sawyer Camp Farmers CIG and our wider community; from
                crop health analysis to smart recommendations that help you make
                better, data-driven decisions in the field.
              </Text>

              <Text fontSize="sm" color={subtleText}>
                These tools are in beta. Results should complement, not replace
                your own expertise and the advice of local agronomists.
              </Text>
            </Stack>

            <Stack
              spacing={3}
              align={"flex-start"}
              fontSize="sm"
              color={subtleText}
            >
              <Text>
                🌱 <strong>Goal:</strong> Make AI accessible to smallholder
                farmers.
              </Text>
              <Text>
                🧪 <strong>Use case:</strong> Try a tool, share feedback, help
                us improve.
              </Text>
              <Text>
                🔒 <strong>Privacy:</strong> Your images and inputs are
                processed securely.
              </Text>
            </Stack>
          </Flex>

          <Divider />

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            fontSize="sm"
            color={subtleText}
          >
            <Box>
              <Heading
                size="xs"
                mb={2}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                How it works
              </Heading>
              <Text>
                1. Choose a tool below • 2. Upload your data (image,
                description, etc.) • 3. Review the AI-generated insights and
                recommendations.
              </Text>
            </Box>

            <Box>
              <Heading
                size="xs"
                mb={2}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Best results
              </Heading>
              <Text>
                Use clear photos, detailed descriptions, and recent field
                context so the AI can provide the most relevant analysis.
              </Text>
            </Box>
          </Flex>
        </Stack>

        <Heading size="md" mb={4}>
          Available AI tools
        </Heading>
        <Text fontSize="sm" color={subtleText} mb={6}>
          Explore the tools below. We&apos;ll keep adding more experiments as
          the AI Lab grows.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {aiLabTools.map((tool) => (
            <AILabCard key={tool.id} tool={tool} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AILab;
