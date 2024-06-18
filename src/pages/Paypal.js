import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useState, useEffect } from "react";
import { SharedLayout, HeadingBox } from "../components";
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

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/farm-women.jpg";

const Paypal = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [currencySymbol, setcurrencySymbol] = useState("$");
  const [amount, setAmount] = useState("30");
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

  useEffect(() => {
    if (currency === "EUR") {
      setcurrencySymbol("€");
    } else {
      setcurrencySymbol("$");
    }
  }, [currency]);

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
      <Box bg="#789461">
        <HeadingBox image={img} title="Empower Our Cause" />
        <Center p="50px" bg="white" w="100%" m="0 auto">
          <Box w={isMobileView ? "80%" : "45%"}>
            {isPending ? (
              <Text>LOADING...</Text>
            ) : (
              <VStack spacing={7} bg="white" w="100%">
                <VStack spacing={0}>
                  <Text>Donation Amount</Text>
                  <hr style={{ width: "100%" }} />
                  <RadioGroup value={amount} mt="10px">
                    <HStack spacing={8}>
                      <Box border="1px solid green" p="8px">
                        <Radio
                          value="30"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          {currencySymbol}30
                        </Radio>
                      </Box>

                      <Box border="1px solid green" p="8px">
                        <Radio
                          value="50"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          {currencySymbol}50
                        </Radio>
                      </Box>

                      <Box border="1px solid green" p="8px">
                        <Radio
                          value="100"
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          {currencySymbol}100
                        </Radio>
                      </Box>
                    </HStack>
                  </RadioGroup>
                </VStack>
                <Box w={{ base: "90%", md: "90%", lg: "70%" }}>
                  <Select
                    mb="20px"
                    value={currency}
                    onChange={onCurrencyChange}
                  >
                    <option value="USD">💵 USD</option>
                    <option value="EUR">💶 Euro</option>
                    <option value="CAD">💵 CAD</option>
                  </Select>

                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) =>
                      onCreateOrder(data, actions)
                    }
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                  />
                </Box>
              </VStack>
            )}
          </Box>
        </Center>
        <Center color="white" spacing={8} h="30rem">
          <VStack spacing="60px" w={isMobileView ? "90%" : "50%"}>
            <Heading align="center" size="2xl">
              Considering a Larger Impact?
            </Heading>
            <Text align="center" fontSize="lg">
              Your generosity inspires us! Let's discuss how your organization
              can partner with us to make a lasting difference.
            </Text>
            <Button colorScheme="green">
              <Link to="/contact-us">Connect with Us</Link>
            </Button>
          </VStack>
        </Center>
      </Box>
    </SharedLayout>
  );
};

export default Paypal;
