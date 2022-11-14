import { apiEndpoint, tokenGenerator } from "../config";
import Axios from "axios";

// creating handlers to get different charges from the server endpoints
/* declaring a post endpoint to get token */
export async function getToken() {
  const token = await Axios.post(tokenGenerator, {
    email: "peteradeojo@outlook.com",
    password: "0123456789",
  }).then(response => {
    console.log(response.data);
    sessionStorage.setItem("token", response.data.data.token);
  });

  // return token.data;
}


/* declaring handler to get virtual card charges details */
export async function getVirtualCardCharges() {
  console.log("Fetching virtual card charges details....");
  const token = sessionStorage.getItem("token");

  const response = await Axios.get(`${apiEndpoint}/virtualcard`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Virtual card charges", response.payload);
  return response.payload;
}

/* declaring handler to get physical charges details */
export async function getPhysicalCharges() {
  console.log("Fetching physical charges details....");

  // retrieving token from session strorage
  const token = sessionStorage.getItem("token")

  const response = await Axios.get(`${apiEndpoint}/physicalcharge`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Physical charges", response.payload);
  return response.payload;
}

/* declaring handler to get bill payment details */
export async function getBillPayment() {
  console.log("Fetching bill payment details....");

  // retrieving token from session strorage
  const token = sessionStorage.getItem("token");

  const response = await Axios.get(`${apiEndpoint}/billpayment`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Bill payment", response.payload);
  return response.payload;
}

/* declaring handler to get electricity charges details */
export async function getElectricityCharges() {
  console.log("Fetching electricity charges details....");

  // retrieving token from session strorage
  const token = sessionStorage.getItem("token");

  const response = await Axios.get(`${apiEndpoint}/electricity`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Electricity charges", response.payload);
  return response.payload;
}

/* declaring handler to get gift card charges details */
export async function getGiftCardCharges() {
  console.log("Fetching gift card charges details....");

  // retrieving token from session strorage
  const token = sessionStorage.getItem("token");

  const response = await Axios.get(`${apiEndpoint}/giftcard`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Gift card charges", response.payload);
  return response.payload;
}

/* declaring handler to get general transaction fee details */
export async function getGeneralTransactionFee() {
  console.log("Fetching general transaction charges details....");

  // retrieving token from session strorage
  const token = sessionStorage.getItem("token");

  const response = await Axios.get(`${apiEndpoint}/generaltransaction`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("General transaction charges", response.payload);
  return response.payload;
}

