import { validateEmail } from "@/src/SDK/utils";
import { mentorLogin } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const useMentorLoginDetails = () => {
  //const { showSnackbar } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);

  const navigate = useRouter();

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      console.log("hey", values);
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

      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);

      mentorLogin(values)
        .then((res) => {
          console.log(res, "res");
          setLoading(false);
          localStorage.setItem("mentorId", res?.data?.guide?.id);
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("userRole", res?.data?.guide?.role);

          showSnackbar("Log in Successfully", "success");

          navigate.push("/mentor/dashboard");
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

export default useMentorLoginDetails;
