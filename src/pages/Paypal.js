import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { SharedLayout } from "../components";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  Select,
  Radio,
  RadioGroup,
  Button,
  HStack,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const Paypal = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [amount, setAmount] = useState(10);
  const isMobileView = useIsMobile();

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <SharedLayout>
      <Box mt="150px">
        <Box bg="#789461" color="white">
          <Center py="50px" h="20rem">
            <VStack w={isMobileView ? "90%" : "50%"} spacing={9}>
              <Heading align="center" size="2xl">
                Your Support Makes a Difference
              </Heading>
            </VStack>
          </Center>
        </Box>
        <Center p="50px" bg="white" w="90%" m="0 auto">
          <>
            <Box>
              {isPending ? (
                <Text>LOADING...</Text>
              ) : (
                <VStack spacing={7} bg="white" w="100%">
                  <RadioGroup value={amount}>
                    <HStack spacing={8}>
                      <Box borderRadius="black solid 2px">
                        <Radio
                          value="10"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          $30
                        </Radio>
                      </Box>

                      <Box borderRadius="black solid 2px">
                        <Radio
                          value="50"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          $50
                        </Radio>
                      </Box>

                      <Box borderRadius="solid black 2px">
                        <Radio
                          value="100"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          $100
                        </Radio>
                      </Box>
                    </HStack>
                  </RadioGroup>

                  <Select value={currency} onChange={onCurrencyChange}>
                    <option value="USD">💵 USD</option>
                    <option value="EUR">💶 Euro</option>
                    <option value="CAD">💵 CAD</option>
                  </Select>

                  <Box w="350px">
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={(data, actions) =>
                        onCreateOrder(data, actions)
                      }
                      onApprove={(data, actions) =>
                        onApproveOrder(data, actions)
                      }
                    />
                  </Box>
                </VStack>
              )}
            </Box>
          </>
        </Center>
        <Center color="white" spacing={8} h="30rem" bg="#789461">
          <VStack spacing="60px" w={isMobileView ? "90%" : "50%"}>
            <Heading align="center" size="2xl">
              Wanting to make a larger contribution?
            </Heading>
            <Text align="center" fontSize="lg">
              We would love to reach out to you. Please contact us if you or
              your organization have an interest in making a transformational
              contribution to Sawyer Camp Farmers CIG.
            </Text>
            <Button colorScheme="green">
              <Link to="/contact-us">Get in touch</Link>
            </Button>
          </VStack>
        </Center>
      </Box>
    </SharedLayout>
  );
};

export default Paypal;
