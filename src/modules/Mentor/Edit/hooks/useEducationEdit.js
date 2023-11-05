import { getMentor, mentorEdit } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

const useEducationEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);

  const form = useFormik({
    validateOnChange: true,
    enableReinitialize: true,
    initialValues: {
      education: [""],
    },
    onSubmit: (values) => {
      console.log("Values", values);
      setLoading(true);
      const mentorDetails = {
        education: values.education,
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
            "error",
          );
        });
    },
  });

  useEffect(() => {
    // Fetch mentor data and update form initial values
    getMentor().then((res) => {
      const mentorData = res?.data?.guide;
      if (mentorData) {
        form.setValues({
          education: mentorData?.education || [], // Update education field
        });
      }
    });
  }, []);

  return {
    form,
    loading,
  };
};

export default useEducationEdit;
