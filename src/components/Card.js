import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc }) => {
  if (title && description && imageSrc) {
    return (
      <VStack
        spacing={8}
        backgroundColor="white"
        boxShadow="lg"
        alignItems="flex-start"
        color="black"
      >
        <Image src={imageSrc} alt={title} width="100%" height="100%" />
        <VStack padding="3" alignItems="flex-start" spacing={2}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>
    );
  }
  return null;
};

export default Card;
