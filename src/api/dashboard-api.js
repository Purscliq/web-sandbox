import { apiEndpoint } from "../config";
import Axios from "axios";

// creating handlers to get different charges from the server endpoints

/* declaring handler to get virtual card charges details */
export async function getVirtualCardCharges(idToken) {
  console.log("Fetching virtual card charges details....");

  const response = await Axios.get(`${apiEndpoint}/virtualcard`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Virtual card charges", response.payload);
  return response.payload;
}

/* declaring handler to get physical charges details */
export async function getPhysicalCharges(idToken) {
  console.log("Fetching physical charges details....");

  const response = await Axios.get(`${apiEndpoint}/physicalcharge`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Physical charges", response.payload);
  return response.payload;
}

/* declaring handler to get bill payment details */
export async function getBillPayment(idToken) {
  console.log("Fetching bill payment details....");

  const response = await Axios.get(`${apiEndpoint}/billpayment`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Bill payment", response.payload);
  return response.payload;
}

/* declaring handler to get electricity charges details */
export async function getElectricityCharges(idToken) {
  console.log("Fetching electricity charges details....");

  const response = await Axios.get(`${apiEndpoint}/electricity`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Electricity charges", response.payload);
  return response.payload;
}

/* declaring handler to get gift card charges details */
export async function getGiftCardCharges(idToken) {
  console.log("Fetching gift card charges details....");

  const response = await Axios.get(`${apiEndpoint}/giftcard`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("Gift card charges", response.payload);
  return response.payload;
}

/* declaring handler to get general transaction fee details */
export async function getGeneralTransactionFee(idToken) {
  console.log("Fetching general transaction charges details....");

  const response = await Axios.get(`${apiEndpoint}/generaltransaction`, {
    /* setting response headers */
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  console.log("General transaction charges", response.payload);
  return response.payload;
}
