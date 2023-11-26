import { getMentorDetails, mentorEdit } from "@/src/apiService/mentorService";
import { Context } from "@/src/context/context";

const { useFormik } = require("formik");
const { useState, useContext, useEffect } = require("react");

const useOtherEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);
  const [mentorData, setMentorData] = useState();

  useEffect(() => {
    const mentorId = localStorage.getItem("mentorId");
    getMentorDetails(mentorId).then((res) => {
      console.log("res", res?.data?.guide);
      setMentorData(res?.data?.guide);
    });
  }, []);

  const form = useFormik({
    validateOnChange: true,
    enableReinitialize: true,
    initialValues: {
      consultation_cost: mentorData?.consultation_cost,
      rating: mentorData?.rating,
      mentees: mentorData?.mentees,
      availability: mentorData?.availability,
    },

    //   validate: (values) => {
    //     const errors = { ...values?.errors };
    //     if (!values?.availability?.toString()) {
    //       errors.email = "Please choose availability";
    //     }

    //     if (!validateEmail(values?.consultation_cost?.toString())) {
    //       errors.email = " Enter a consultation cost";
    //     }
    //     return errors;
    //   },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);
      const mentorDetails = {
        consultation_cost: values?.consultation_cost,
        mentees: values?.mentees,
        rating: values?.rating,
        availability: values?.availability,
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
  };
};

export default useOtherEdit;
