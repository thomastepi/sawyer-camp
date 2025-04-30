import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { article } from "../../utils/article";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BlogArticleBox = ({ title, subtitle, bgColor }) => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
    <Box
      bg={bgColor || "#FFF"}
      w="100%"
      p={4}
      color="black"
      boxShadow="md"
      rounded="md"
    >
      <Heading size="2xl" align="center" color="green" py={title && "9"}>
        {title}
      </Heading>
      {subtitle && (
        <Text color="#87A922" align="center">
          {subtitle}
        </Text>
      )}

      <Center mt="6" gap="6" flexDir={isMobile && "column"}>
        {article.map((item) => (
          <MotionBox
            key={item.id}
            maxW="sm"
            bg="#D2E3C8"
            borderRadius="md"
            boxShadow="md"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            onClick={() => navigate(`/article/${item.id}`)}
            cursor="pointer"
          >
            <Stack p={4}>
              <Image src={item.image} alt={item.title} borderRadius="lg" />
              <Text>{item.date}</Text>
              <Text
                as={Link}
                fontSize="lg"
                fontWeight="bold"
                _hover={{ textDecoration: "underline" }}
                color="blue"
              >
                {item.title}
              </Text>
            </Stack>
          </MotionBox>
        ))}
      </Center>
    </Box>
  );
};

export default BlogArticleBox;
