import { useFormik } from "formik";
import { useContext, useState } from "react";

const useCollegeData = () => {
  const [loading, setLoading] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({});

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      collegeName: "",
      city: "none", //Dropdown
      state: "none", //Dropdown
      collegeType: "none", //Dropdown
      category: "none", //Dropdown
      coursesAvailable: "",
      ranking: "",
      fees: "",
      lowPlacement: "",
      highPlacement: "",

      avgCutoff: "",
      admissionMedium: "",
      establishmentYear: "",
      campusSize: "",
      numberOfStudents: "",
      numberOfDepartments: "",
      rankingsNIRF2023: "",
      flagshipCourse: "",
      numberOfCourses: "",
      totalFaculty: "",
      scholarshipsOffered: "",

      collegeLogo: "", //formData
      brochure: "",
    },

    validate: (values) => {
      const errors = { ...values?.errors };

      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return {
    form,
    loading,
    setVehicleDetails,
  };
};

export default useCollegeData;
