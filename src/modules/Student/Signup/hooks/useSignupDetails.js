import { validateEmail } from "@/src/SDK/utils";
import { studentSignup } from "@/src/apiService/studentService";
import { Context } from "@/src/context/context";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const useSignUpDetails = () => {

  const [loading, setLoading] = useState(false);

  const { showSnackbar } = useContext(Context);
  const navigate = useRouter();
  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      email: "",
      password: "",
      mobile: "",
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
      if (!values?.mobile?.toString()) {
        errors.mobile = "Mobile Number is Mandatory";
      }
      if (values?.mobile?.toString()?.length !== 10) {
        errors.mobile = "Enter a valid 10 digit Mobile Number";
      }
      if (values?.mobile && values?.mobile[0] < 5) {
        errors.mobile = "Enter Valid Mobile Number";
      }
      if (values?.name?.toString()?.length === 0) {
        errors.name = "Please Enter Your Name";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);

      studentSignup(values)
        .then((res) => {
          setLoading(false);
          localStorage.setItem("studentId", res?.data?.student?.id);
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("userRole", res?.data?.student?.role);

          showSnackbar("Sign Up Successfully", "success");
          navigate.push("/student/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          console.log("error", error);

          showSnackbar(
            error?.msg ?? "Oops, something went wrong. Please try again later.",
            "error"
          );
        });
    },
  });
  return {
    form,
    loading,
  };
};

export default useSignUpDetails;
