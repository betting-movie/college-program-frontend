import addNewCollege from "@/src/apiService/collegeData";
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

      const payload = {
        college_name: values.collegeName,
        city: values.city,
        state: values.state,
        category: values.category,
        coursesAvailable: [values.coursesAvailable],
        placement: [parseFloat(values.lowPlacement), parseFloat(values.highPlacement)],
        collegeType: values.collegeType,
        numberOfCourses: values.numberOfCourses,
        ranking: values.ranking,
        fees: values.fees,
        avgCutoff: parseFloat(values.avgCutoff),
        counsellingMode: values.counsellingMode,
        admissionMode: values.admissionMedium,
        establishmentYear: values.establishmentYear,
        campusSize: values.campusSize,
        numberOfStudents: values.numberOfStudents,
        numberOfDepartments: values.numberOfDepartments,
        rankingsNIRF: values.rankingsNIRF2023,
        flagshipCourse: values.flagshipCourse,
        totalFaculty: values.totalFaculty,
        scholarshipsOffered: values.scholarshipsOffered,
      };

      addNewCollege(payload).then((res)=>{
        console.log("Data Entered Successfully",res)
      }).catch((err)=>{
        console.log("error",err)
      })
    },
  });
  return {
    form,
    loading,
    setVehicleDetails,
  };
};

export default useCollegeData;
