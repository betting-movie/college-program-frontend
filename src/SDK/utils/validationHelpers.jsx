export const isANumber = (value) => {
  const re = /^[0-9\b]+$/;
  if (value === "" || re.test(value)) {
    return true;
  }
  return false;
};

export const checkError = (name, form) => {
  const touched = form.touched;
  const errors = form.errors;

  return touched[name] && errors[name]
    ? errors[name]
    : errors[name] === undefined
    ? null
    : true;
};

export const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber?.length === 0) {
    return "Phone number is required.";
  }

  if (phoneNumber?.length < 10) {
    return "Phone number must be 10 digit long.";
  }

  if (isANumber(phoneNumber) && phoneNumber?.length === 10) return "valid";

  return "Invalid Phone Number";
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export function isPincodeValid(pincode) {
  return /^[1-9][0-9]{5}$/.test(pincode);
}

export function isValidGSTIN(GSTIN) {
  const checkGSTIN = GSTIN.match(/^([A-Z0-9]+)$/g);

  if (checkGSTIN === null || GSTIN?.length !== 15) {
    return false;
  } else {
    return true;
  }
}
export const isEmptyObject = (obj = {}) => Object.keys(obj)?.length === 0;
export const indianCurrencyFormat = (value) => {
  let valueStr = value?.toString();
  let afterPoint = "";
  if (valueStr.indexOf(".") > 0)
    afterPoint = valueStr?.substring(valueStr?.indexOf("."), valueStr?.length);
  valueStr = Math.floor(parseInt(valueStr))?.toString();
  let lastThree = valueStr?.substring(valueStr?.length - 3);
  let otherNumbers = valueStr?.substring(0, valueStr?.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  let res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  return res;
};
