import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  SimpleGrid,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import s from "./FarmDoctor.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  MAX_FILE_SIZE,
  ALLOWED_IMAGE_TYPES,
  generatePrompt,
} from "../../utils/constants";

const FarmDoctor = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError(
        "Unsupported file type. Please upload a PNG, JPEG, WEBP, or non-animated GIF image."
      );
      setImage(null);
      setPreview(null);
      e.target.value = null;
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError(
        "File size exceeds the 50 MB limit. Please upload a smaller image."
      );
      setImage(null);
      setPreview(null);
      e.target.value = null;
      return;
    }
    setError(null);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Please upload an image of the affected plant.");
      return;
    }

    setLoading(true);
    setError(null);
    setDiagnosis(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", generatePrompt(description));

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/sawyer-camp/analyze-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setDiagnosis(response.data[0].content);
    } catch (err) {
      console.error("Error:", err);
      setError(
        "An error occurred while getting the diagnosis. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const cardBg = "white";
  const cardBorder = "gray.200";

  return (
    <Box>
      <PageHeader
        title="Farm Doctor"
        imageUrl="https://images.unsplash.com/photo-1563262522-839e57833158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      />

      <Box bg={"gray.50"}>
        <Container maxW="6xl" py={10}>
          <VStack spacing={6} align="stretch" mb={6}>
            <Badge
              alignSelf="flex-start"
              colorScheme="green"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
            >
              Farmer-focused AI
            </Badge>

            <Heading as="h1" size="xl" color="green.600">
              AI-Powered Farm Doctor
            </Heading>

            <Text fontSize="lg" color="gray.700">
              Get quick, AI-assisted insights on crop health. Upload a photo of
              an affected plant, add a short description, and Farm Doctor will
              provide a probable diagnosis and actionable recommendations.
            </Text>

            <Text fontSize="sm" color="gray.500">
              <strong>Note:</strong> Farm Doctor is an assistant, not a
              replacement for an agronomist. Always double-check critical
              decisions with a local expert.
            </Text>

            <Divider />
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack
              spacing={6}
              align="stretch"
              bg={cardBg}
              borderWidth="1px"
              borderColor={cardBorder}
              borderRadius="xl"
              boxShadow="md"
              p={{ base: 5, md: 6 }}
            >
              <Heading as="h2" size="md">
                1. Upload & describe
              </Heading>

              <FormControl>
                <FormLabel>
                  Upload a clear image of the affected plant
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  p={1}
                />
                <FormHelperText fontSize="sm" color="gray.500" mt={2}>
                  Allowed types:{" "}
                  {ALLOWED_IMAGE_TYPES.map((type) =>
                    type.split("/")[1].toUpperCase()
                  ).join(", ")}
                  . Max size: {MAX_FILE_SIZE / (1024 * 1024)} MB. Make sure the
                  plant and symptoms are clearly visible.
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>
                  Describe the issue (optional, but helpful)
                </FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Example: Leaves started turning yellow 2 weeks ago. Soil is often wet. Maize crop, planted in early rainy season..."
                />
                <FormHelperText fontSize="sm" color="gray.500">
                  The more context you provide, the more precise the AI’s
                  diagnosis can be.
                </FormHelperText>
              </FormControl>

              <Button
                colorScheme="green"
                onClick={handleSubmit}
                isLoading={loading}
                loadingText="Diagnosing..."
                size="lg"
                alignSelf="flex-start"
              >
                Get AI Diagnosis
              </Button>

              {error && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
            </VStack>

            <VStack spacing={6} align="stretch">
              {preview && (
                <Box
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={cardBorder}
                  borderRadius="lg"
                  p={4}
                  boxShadow="sm"
                >
                  <Heading as="h2" size="md" mb={3}>
                    2. Image preview
                  </Heading>
                  <Box textAlign="center">
                    <Image
                      src={preview}
                      alt="Image preview"
                      maxH="320px"
                      mx="auto"
                      borderRadius="md"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
              )}

              <Box
                bg={cardBg}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                p={6}
                boxShadow="sm"
              >
                <Heading as="h2" size="md" mb={3}>
                  3. Diagnosis & recommendations
                </Heading>

                {!diagnosis && !loading && (
                  <Text fontSize="sm" color="gray.500">
                    Once you upload an image and click{" "}
                    <strong>Get AI Diagnosis</strong>, your results will appear
                    here with a probable diagnosis and next steps to help your
                    crops recover.
                  </Text>
                )}

                {diagnosis && (
                  <VStack align="stretch" mt={2} spacing={4}>
                    {diagnosis.map((res, index) => (
                      <Box
                        key={index}
                        className={s["diagnosis-section"]}
                        fontSize="md"
                        dangerouslySetInnerHTML={{ __html: res.text }}
                      />
                    ))}
                  </VStack>
                )}
              </Box>
            </VStack>
          </SimpleGrid>
          <Button
            type="link"
            mt="2rem"
            leftIcon={<ArrowBackIcon />}
            onClick={() => navigate("/ai-lab")}
          >
            {" "}
            Back to AI Lab
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default FarmDoctor;
