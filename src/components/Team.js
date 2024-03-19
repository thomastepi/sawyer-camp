import React from "react";
import SharedLayout from "../pages/SharedLayout";
import {
  Heading,
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import team from "../utils/team";

const Team = () => {
  return (
    <SharedLayout
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="#EEF0E5"
    >
      <Box align="center" w="100%" height="30vh">
        <Box w="70%" align="center">
          <Heading py={10}>Our Team</Heading>
        </Box>
      </Box>
      <Box w="100%" height="70vh" align="center">
        <Box
          w="80%"
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          gridGap={30}
        >
          <>
            {team.map((member) => {
              return (
                <>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "150px" }}
                      src={member.image}
                      alt="member-image"
                    />

                    <Stack>
                      <CardBody>
                        <Heading size="md">{member.name}</Heading>

                        <Text py="2">{member.title}</Text>
                      </CardBody>
                    </Stack>
                  </Card>
                </>
              );
            })}
          </>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default Team;
