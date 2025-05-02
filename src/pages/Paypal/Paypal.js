import React, { useState, useEffect, useRef } from "react";
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
  FormControl,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import PageHeader from "../../components/PageHeader/PageHeader";
import DisplayAlert from "../../components/Alert/DisplayAlert";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";
import { setAlert } from "../../features/alertSlice";

const img =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/woman-carrying-child.jpg";

const Paypal = () => {
  const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [currencySymbol, setcurrencySymbol] = useState("$");
  const [amount, setAmount] = useState("50");

  const isMobileView = useIsMobile();
  const reduxDispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const alertRef = useRef(null);

  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    setcurrencySymbol(currency === "EUR" ? "€" : "$");
  }, [currency]);

  useEffect(() => {
    if (alert.show && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [alert]);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    paypalDispatch({
      type: "resetOptions",
      value: { ...options, currency: value },
    });
  };

  const onCreateOrder = async () => {
    try {
      const response = await fetch(`${baseURL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const order = await response.json();
      return order.id;
    } catch (error) {
      window.alert(
        `An error occurred while processing your transaction. Please try again later.`
      );
      reduxDispatch(
        setAlert({
          message:
            "An error occurred while processing your transaction. Please try again later.",
          status: "error",
          title: "Error!",
          show: true,
        })
      );
    }
  };

  const onApproveOrder = async (data) => {
    if (!data.orderID) {
      window.alert("No order ID found. Please try again.");
      return;
    }
    const response = await fetch(
      `${baseURL}/api/capture-order/${data.orderID}`,
      {
        method: "POST",
      }
    );
    const details = await response.json();
    if (details.status === "COMPLETED") {
      reduxDispatch(
        setAlert({
          message:
            "Thank you for your donation. Your transaction was completed successfully.",
          status: "success",
          title: "Success!",
          show: true,
        })
      );
    } else {
      reduxDispatch(
        setAlert({
          message: "Your transaction was cancelled. Please try again.",
          status: "error",
          title: "Cancelled!",
          show: true,
        })
      );
    }
  };

  return (
    <Box bg="#789461">
      <PageHeader image={img} title="Empower Our Cause" />

      <Center p="50px" bg="white" w="100%" m="0 auto">
        <Box w={isMobileView ? "90%" : "45%"}>
          {isPending ? (
            <Center>
              <Spinner size="lg" color="green.500" />
            </Center>
          ) : (
            <VStack spacing={7} bg="white" w="100%">
              <Text fontSize="md" color="gray.700" textAlign="center">
                Your donation supports farmers displaced by conflict and helps
                restore essential food production.
              </Text>

              <FormControl as="fieldset">
                <FormLabel fontWeight="bold" textAlign="center">
                  Select a Donation Amount
                </FormLabel>
                <RadioGroup value={amount} mt="10px">
                  <HStack spacing={6} justifyContent="center" wrap="wrap">
                    {["30", "50", "100"].map((val) => (
                      <Box
                        key={val}
                        border={
                          val === "50" ? "2px solid green" : "1px solid green"
                        }
                        p={4}
                        borderRadius="md"
                        bg={val === "50" ? "green.50" : "white"}
                        _hover={{ bg: "green.100", cursor: "pointer" }}
                        textAlign="center"
                      >
                        <Radio
                          value={val}
                          onChange={(e) => setAmount(e.target.value)}
                        >
                          {currencySymbol}
                          {val}
                        </Radio>
                        {val === "50" && (
                          <Text fontSize="xs" color="gray.600">
                            Most Impactful
                          </Text>
                        )}
                      </Box>
                    ))}
                  </HStack>
                </RadioGroup>
              </FormControl>

              <Box w="100%">
                <Select mb="20px" value={currency} onChange={onCurrencyChange}>
                  <option value="USD">💵 USD</option>
                  <option value="EUR">💶 Euro</option>
                  <option value="CAD">💵 CAD</option>
                </Select>

                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={onCreateOrder}
                  onApprove={onApproveOrder}
                />
                <Text fontSize="sm" mt={2} color="gray.500" textAlign="center">
                  Transactions secured by PayPal
                </Text>
              </Box>

              <Box ref={alertRef} w="100%">
                {alert.show && (
                  <DisplayAlert
                    message={alert.message}
                    alertStatus={alert.status}
                    title={alert.title}
                  />
                )}
              </Box>
            </VStack>
          )}
        </Box>
      </Center>

      <Center color="white" spacing={8} py="100px">
        <VStack spacing={10} w={isMobileView ? "90%" : "50%"}>
          <Heading align="center" size="2xl">
            Considering a Larger Impact?
          </Heading>
          <Text align="center" fontSize="lg">
            Your generosity inspires us! Let's discuss how your organization can
            partner with us to make a lasting difference.
          </Text>
          <Button colorScheme="green">
            <Link to="/contact-us">Connect with Us</Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Paypal;
