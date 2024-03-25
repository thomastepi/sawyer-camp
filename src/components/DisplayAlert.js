import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setAlert } from "../features/alertSlice";

const DisplayAlert = ({ message, alertStatus, title }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Alert status={alertStatus}>
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => {
            dispatch(
              setAlert({
                message: "",
                status: "success",
                title: "",
                isSuccessful: false,
                show: false,
              })
            );
          }}
        />
      </Alert>
    </>
  );
};

export default DisplayAlert;
