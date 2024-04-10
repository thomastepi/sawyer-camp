import React from "react";
import {
  Heading,
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import team from "../utils/team";

const Team = () => {
  return (
    <Box minHeight="100vh" bg="#EEF0E5">
      <VStack
        pt="70px"
        justifyContent="center"
        alignItems="center"
        color="#87A922"
        spacing={9}
      >
        <Box align="center" w="100%" color="green">
          <Box w="70%" align="center">
            <Heading py={10}>Our Team</Heading>
          </Box>
        </Box>
        <Box w="100%" align="center">
          <Box
            w="80%"
            display="grid"
            css={{
              "@media (max-width: 768px)": {
                gridTemplateColumns: "1fr",
                gridGap: 20,
              },
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridGap: 30,
            }}
          >
            <>
              {team.map((member, index) => {
                return (
                  <Card
                    borderRadius="none"
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    color="#87A922"
                    key={index}
                  >
                    <Avatar
                      size="2xl"
                      name={member.name}
                      src={member.image}
                      borderRadius="none"
                    />
                    <Stack>
                      <CardBody>
                        <Heading size="md">{member.name}</Heading>
                        <Text py="2">{member.title}</Text>
                      </CardBody>
                    </Stack>
                  </Card>
                );
              })}
            </>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Team;
