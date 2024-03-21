import React from "react";
import SharedLayout from "../pages/SharedLayout";
import {
  Heading,
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Avatar
} from "@chakra-ui/react";
import team from "../utils/team";

const Team = () => {
  return (
    <SharedLayout
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="#EEF0E5"
      color='#87A922'
    >
      <Box align="center" w="100%" height="30vh" color='green'>
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
                    color='#87A922'
                  >
                    <Avatar
                      size="2xl"
                      name={member.name}
                      src={member.image}
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
