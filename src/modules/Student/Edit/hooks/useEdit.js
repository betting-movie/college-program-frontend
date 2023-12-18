import { validateEmail } from "@/src/SDK/utils";

const {
  getStudentsDetails,
  studentEdit,
} = require("@/src/apiService/studentService");
const { Context } = require("@/src/context/context");
const { useFormik } = require("formik");
const { useState, useContext, useEffect } = require("react");

const useEdit = () => {
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(Context);

  const [studentData, setStudentData] = useState();
  const [previewURL, setPreviewURL] = useState();
  const [selectedOptions, setSelectedOptions] = useState();
  useEffect(() => {
    const studentId = localStorage?.getItem("studentId");
    getStudentsDetails(studentId).then((res) => {
      setStudentData(res?.data?.student);
      setSelectedOptions(res?.data?.student?.domains);
      setPreviewURL(res?.data?.student?.profile_pic);
    });
  }, []);

  const form = useFormik({
    enableReinitialize: true,
    validateOnChange: true,
    initialValues: {
      name: studentData?.name,
      profile_pic: studentData?.profile_pic,
      email: studentData?.email,
      phone_number: studentData?.phone_number,
      bio: studentData?.bio,
      linkedinUrl: studentData?.linkedinUrl,
      domains: studentData?.domains,
      resume: studentData?.resume,
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
      console.log("Values", values, selectedOptions);
      setLoading(true);
      const studentDetails = {
        email: values?.email,
        name: values?.name,
        profile_pic: values?.picUrl,
        bio: values?.bio,
        phone_number: values?.phone_number,
        linkedinUrl: values?.linkedinUrl,
        domains: selectedOptions,
        resume: values?.resume,
      };

      studentEdit(studentDetails)
        .then((res) => {
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
    selectedOptions,
    setSelectedOptions,
  };
};

export default useEdit;
