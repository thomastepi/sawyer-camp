import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useState } from "react";
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
import { Header, Footer } from "../components/index";

const Paypal = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [amount, setAmount] = useState(10);

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
    <>
      <Header />
      <Box>
        <Box bg="teal" color="white">
          <Center py="50px" h="20rem">
            <VStack w="50%" spacing={9}>
              <Heading align="center" size="2xl">
                Your Support Makes a Difference
              </Heading>
            </VStack>
          </Center>
        </Box>
        <Center p="50px" bg="white" w="50%" m="0 auto">
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

                  <Box w="500px">
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
        <Center spacing={8} h="30rem" bg="#BBE2EC">
          <VStack spacing="60px" w="50%">
            <Heading>Wanting to make a larger contribution?</Heading>
            <Text align="center">
              We would love to reach out to you. Please contact us if you or
              your organization have an interest in making a transformational
              contribution to Sawyer Camp Farmers CIG.
            </Text>
            <Button colorScheme="teal">
              <Link to="/contact-us">Get in touch</Link>
            </Button>
          </VStack>
        </Center>
      </Box>

      <Footer />
    </>
  );
};

export default Paypal;
