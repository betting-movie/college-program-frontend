import { validateEmail } from "@/src/SDK/utils";
import { getMentorDetails, mentorEdit } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";

const useSkillEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);
  const [mentorData, setMentorData] = useState();
  const [selectedOptions, setSelectedOptions] = useState();

  useEffect(() => {
    const mentorId = localStorage.getItem("mentorId");
    getMentorDetails(mentorId).then((res) => {
      console.log("res", res?.data?.guide);
      setMentorData(res?.data?.guide);
      setSelectedOptions(res?.data?.guide?.skills);
    });
  }, []);
 

  const form = useFormik({
    validateOnChange: true,
    enableReinitialize: true,
    initialValues: {
      skills: selectedOptions,
    },

    onSubmit: (values) => {
      console.log("values", selectedOptions);
      setLoading(true);
      const mentorDetails = {
        skills: selectedOptions,
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
    selectedOptions,
    setSelectedOptions,
  };
};

export default useSkillEdit;
