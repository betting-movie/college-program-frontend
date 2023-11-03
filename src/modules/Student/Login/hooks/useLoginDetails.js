import { validateEmail } from "@/src/SDK/utils";
import { useFormik } from "formik";
import { useState } from "react";

const useLoginDetails = () => {
  //const { showSnackbar } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = { ...values?.errors };

      if (!values?.email?.toString()) {
        errors.email = "Please Enter email id";
      }

      if (!validateEmail(values?.email?.toString())) {
        errors.email = " Enter a valid email id";
      }

      if (values?.password?.toString().length < 6) {
        errors.password = "Password should be greater than 6 digits";
      }
      //   if (!values?.mobile?.toString()) {
      //     errors.mobile = "Mobile Number is Mandatory";
      //   }
      //   if (values?.mobile?.toString()?.length !== 10) {
      //     errors.mobile = "Enter a valid 10 digit Mobile Number";
      //   }
      //   if (values?.mobile && values?.mobile[0] < 5) {
      //     errors.mobile = "Enter Valid Mobile Number";
      //   }
      //   if (values?.name?.toString()?.length === 0) {
      //     errors.name = "Please Enter Your Name";
      //   }

      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);
      setFormSubmit(true);

      //   LeadService(values)
      //     .then((res) => {
      //       console.log(res, "res");
      //       setLoading(false);
      //       localStorage.setItem("phone", values?.mobile);
      //     })
      //     .catch((error) => {
      //       setLoading(false);
      //       console.log("error", error);
      //     });
      //   let analytics_payload = {
      //     vehicle_name: vehicleDetails?.name ?? "",
      //     vehicle_id: vehicleDetails?.vehicle_id ?? "",
      //     emi_shown: vehicleDetails?.emiPrice ?? "",
      //     price_shown: vehicleDetails?.price ?? "",
      //     offer_name: offer_name,
      //     offer_id: offer_id,
      //     tag_name: tag_name,
      //     tag_id: tag_id,
      //     user_name: values.name,
      //     phone_number: values.mobile,
      //     state: state.selectedState,
      //     button_trigger_location: "Contact us",
      //     type: "contactus_form",
      //     is_otp_verified: state?.leadVerifiedStatus,
      //   };
      //   sendAnalytics("contact_us_clicked", analytics_payload, "en");
      //   let payload = {
      //     name: values?.name ?? "",
      //     phone: values.mobile,
      //     pan: "",
      //     pincode: "",
      //     dob: "",
      //     state: values?.state ?? "Unknown",
      //     optedExchange: "",
      //     vehicleSelected: values.vehicle,
      //     language: "en",
      //     refNumber: "",
      //     leadIntent: "",
      //     subSource: "Contact Us",
      //     verified: state?.leadVerifiedStatus,
      //   };
      //   setLoading(true);
      //   LeadService(payload)
      //     .then((response) => {
      //       const sessionInfo = {
      //         leadUuid: response?.data?.uuid,
      //         newSession: true,
      //         formSubmitted: true,
      //         leadIntent: "LOW_INTENT",
      //       };
      //       sessionTracking(sessionInfo);
      //       showSnackbar("We will get back to you soon!!", "success");
      //       setLoading(false);
      //     })
      //     .catch((error) => {
      //       showSnackbar(
      //         "Oops, something went wrong. Please try again later.",
      //         "error"
      //       );
      //     });
    },
  });
  return {
    form,
    loading,
    formSubmit,
  };
};

export default useLoginDetails;
