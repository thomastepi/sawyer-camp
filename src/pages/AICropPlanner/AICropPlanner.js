import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  HStack,
  Tag,
  SimpleGrid,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import PageHeader from "../../components/PageHeader/PageHeader";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setLoadingText } from "../../features/cropPlannerSlice";
import { handleSubmit } from "../../features/cropPlannerSlice";
import { loadingMessages } from "../../utils/constants";
import s from "./AICropPlanner.module.css";

const AICropPlanner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, suggestion, loading, loadingText, error } = useSelector(
    (state) => state.aiCropPlanner
  );

  useEffect(() => {
    if (!loading) return;

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      dispatch(setLoadingText(loadingMessages[index]));
    }, 4000);

    return () => clearInterval(interval);
  }, [loading, dispatch]);

  const handleChange = (e) => {
    dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = () => {
    try {
      dispatch(handleSubmit(formData));
    } catch (e) {
      console.log(e);
    }
  };

  const cardBg = "white";
  const accentBg = "green.50";

  return (
    <Box>
      <PageHeader
        title="AI Crop Planner"
        bg={"gray.100"}
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-banana.jpg"
      />

      <Box bg={"gray.50"} py={{ base: 8, md: 12 }}>
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
          <HStack
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            spacing={6}
            mb={10}
          >
            <VStack align="flex-start" spacing={3}>
              <Tag colorScheme="green" borderRadius="full" px={3} py={1}>
                AI-Powered Planning
              </Tag>
              <Heading as="h1" size="xl" color="green.700">
                Plan smarter, plant with confidence
              </Heading>
              <Text fontSize="md" color="gray.600">
                Use AI to match your soil, location, farm size, and local demand
                with the most profitable crops for your farm. Spend less time
                guessing and more time growing.
              </Text>
            </VStack>

            <Box
              display={{ base: "none", md: "block" }}
              textAlign="right"
              minW="220px"
            >
              <Text fontSize="sm" color="gray.500">
                Season insights
              </Text>
              <Text fontWeight="semibold" color="green.600">
                Get tailored crop ideas <br /> in just a few clicks.
              </Text>
            </Box>
          </HStack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems="flex-start"
          >
            <Box
              className={s["crop-planner-form"]}
              as="form"
              onSubmit={handleSubmit}
              bg={cardBg}
              borderRadius="xl"
              borderWidth="1px"
              boxShadow="md"
              p={{ base: 5, md: 6 }}
            >
              <Heading size="md" mb={4}>
                Tell us about your field
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={6}>
                These details help the AI suggest crops that fit your local
                conditions and market opportunities.
              </Text>

              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel htmlFor="soilType">Soil Type</FormLabel>
                  <Select
                    id="soilType"
                    name="soilType"
                    placeholder="Select soil type"
                    value={formData.soilType}
                    onChange={handleChange}
                  >
                    <option value="sandy">Sandy</option>
                    <option value="clay">Clay</option>
                    <option value="loamy">Loamy</option>
                    <option value="Silty">Silty</option>
                    <option value="unknown soil type">Unknown soil type</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="waterAccess">Water Access</FormLabel>
                  <Select
                    id="waterAccess"
                    name="waterAccess"
                    placeholder="Water Source"
                    value={formData.waterAccess}
                    onChange={handleChange}
                  >
                    <option value="rainfall">Rainfall only</option>
                    <option value="stream/river">Stream/River nearby</option>
                    <option value="borehole/well">Borehole/Well</option>
                    <option value="irrigation">Irrigation System</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="location">Farm Location</FormLabel>
                  <Input
                    id="location"
                    name="location"
                    placeholder="e.g. Bamenda, Cameroon"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="marketDemand">Market Demand</FormLabel>
                  <Select
                    id="marketDemand"
                    name="marketDemand"
                    placeholder="Select market demand"
                    value={formData.marketDemand}
                    onChange={handleChange}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="farmSize">Farm Size (Optional)</FormLabel>
                  <Input
                    id="farmSize"
                    name="farmSize"
                    placeholder="e.g. 2 hectares"
                    value={formData.farmSize}
                    onChange={handleChange}
                  />
                </FormControl>

                <Button
                  onClick={handleFormSubmit}
                  isLoading={loading}
                  loadingText={loadingText}
                  colorScheme="green"
                  size="lg"
                  w="full"
                  mt={2}
                >
                  Get AI Recommendation
                </Button>

                {loading && (
                  <Text fontSize="xs" color="gray.500">
                    This may take up to 1–2 minutes when real-time web data is
                    required.
                  </Text>
                )}

                {error && (
                  <Alert status="error" borderRadius="md">
                    <AlertIcon />
                    {error}
                  </Alert>
                )}

                <Button
                  type="link"
                  mt="0.5rem"
                  leftIcon={<ArrowBackIcon />}
                  onClick={() => navigate("/ai-lab")}
                >
                  {" "}
                  Back to AI Lab
                </Button>
              </VStack>
            </Box>

            <VStack spacing={6} align="stretch">
              <Box
                p={5}
                borderRadius="xl"
                borderWidth="1px"
                boxShadow="md"
                bg={accentBg}
              >
                <HStack spacing={3} mb={3}>
                  <InfoIcon color="green.500" />
                  <Heading size="sm">How the AI Crop Planner helps</Heading>
                </HStack>
                <Text fontSize="sm" color="gray.700" mb={3}>
                  The planner looks at your growing conditions and market demand
                  to suggest crops that balance:
                </Text>
                <VStack as="ul" align="flex-start" spacing={2} pl={5}>
                  <Text as="li" fontSize="sm">
                    ✅ Agronomic fit (soil, climate, water)
                  </Text>
                  <Text as="li" fontSize="sm">
                    ✅ Market potential and selling price
                  </Text>
                  <Text as="li" fontSize="sm">
                    ✅ Risk diversification across seasons
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </SimpleGrid>
          <Box
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            boxShadow="md"
            bg={cardBg}
            minH="180px"
            mt={10}
          >
            <HStack spacing={3} mb={3}>
              <CheckCircleIcon color="green.500" />
              <Heading color={"green"} size="sm">
                {suggestion
                  ? "Recommended crop"
                  : "Your recommendation appears here"}
              </Heading>
            </HStack>
            <Divider mb={3} />

            {suggestion ? (
              <>
                <Box
                  className={s["suggestion-section"]}
                  fontSize="md"
                  mb={3}
                  dangerouslySetInnerHTML={{ __html: suggestion }}
                />
                <Text fontSize="sm" color="gray.500">
                  Use this as a starting point. Combine AI advice with your
                  local knowledge, input costs, and experience before deciding
                  your final crop plan.
                </Text>
              </>
            ) : (
              <>
                {loading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="green.200"
                    color="blue.500"
                    size="xl"
                  />
                ) : (
                  <Text fontSize="sm" color="gray.500">
                    Fill in the form above and click{" "}
                    <strong>“Get AI Recommendation”</strong> to see a suggested
                    crop tailored to your conditions.
                  </Text>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AICropPlanner;
