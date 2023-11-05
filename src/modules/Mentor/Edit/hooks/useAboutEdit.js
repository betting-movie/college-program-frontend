import { validateEmail } from "@/src/SDK/utils";
import { getMentor, mentorEdit } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";
import shadows from "@mui/material/styles/shadows";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

const useAboutEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);

  const [mentorData, setMentorData] = useState();
  useEffect(() => {
    getMentor().then((res) => {
      console.log("res", res?.data?.guide);
      setMentorData(res?.data?.guide);
    });
  }, []);
  const [previewURL, setPreviewURL] = useState(mentorData?.profile_pic);

  const form = useFormik({
    enableReinitialize: true,
    validateOnChange: true,
    initialValues: {
      name: mentorData?.name,
      profile_pic: mentorData?.profile_pic,
      email: mentorData?.email,
      phone_number: mentorData?.phone_number,
      description: mentorData?.description,
      linkedinUrl: mentorData?.linkedinUrl,
      experience: mentorData?.experience,
      designation: mentorData?.designation,
    },

    validate: (values) => {
      const errors = { ...values?.errors };
      if (!values?.email?.toString()) {
        errors.email = "Please Enter email id";
      }

      if (!validateEmail(values?.email?.toString())) {
        errors.email = " Enter a valid email id";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);
      const mentorDetails = {
        email: values?.email,
        name: values?.name,
        profile_pic: values?.picUrl,
        description: values?.description,
        phone_number: values?.phone_number,
        linkedinUrl: values?.linkedinUrl,
        description: values?.description,
        designation: values?.designation,
      };

      mentorEdit(mentorDetails)
        .then((res) => {
          console.log(res, "res");
          setLoading(false);
          showSnackbar("Updated Successfully", "success");
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
    previewURL,
    setPreviewURL,
  };
};

export default useAboutEdit;
