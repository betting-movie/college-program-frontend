import { getMentor, mentorEdit } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

const useExperienceEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);

  const form = useFormik({ 
    validateOnChange: true,
    enableReinitialize: true,
    initialValues: {
      current_company: "",
      experience: [""], // Initial value for experience
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);

      const mentorDetails = {
        current_company: values.current_company,
        experience: values.experience,
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

  // Fetch mentor data and set it as initial values
  useEffect(() => {
    getMentor().then((res) => {
      const mentorData = res?.data?.guide;
      if (mentorData) {
        form.setValues({
          current_company: mentorData.current_company,
          experience: mentorData.experience || [""],
        });
      }
    }); 
  }, []);

  return {
    form,
    loading,
  };
};

export default useExperienceEdit;
