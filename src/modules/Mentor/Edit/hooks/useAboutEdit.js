import { validateEmail } from "@/src/SDK/utils";
import { useFormik } from "formik";
import { useState } from "react";

const sampleData = [
  {
    id: "1f2edcad-9a31-4e53-b0d6-40cd1c898977",
    email: "sample1@example.com",
    password: "samplepassword1",
    profile_pic:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    phone_number: "1234567890",
    name: "John Doe",
    designation: "Senior Consultant",
    description: "Experienced consultant with a focus on financial planning.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    consultation_cost: 100,
    availability: "Available for consultation",
    education: ["MBA in Finance", "Bachelor of Commerce"],
    achievements: ["Best Consultant Award 2020", "Top Performer in 2019"],
    current_company: "Google", // Missing in backend
    experience: [
      "Financial Advisor at ABC Corp",
      "Investment Analyst at XYZ Inc",
    ],
    skills: [
      "Financial Planning",
      "Investment Management",
      "Risk Assessment",
      "Leadership",
    ],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
];

const useAboutEdit = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const [previewURL, setPreviewURL] = useState(sampleData[0]?.profile_pic);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewURL(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewURL("");
    }
  };

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      name: sampleData[0]?.name,
      profile_pic: previewURL,
      email: sampleData[0]?.email,
      phone_number: sampleData[0]?.phone_number,
      description: sampleData[0]?.description,
      linkedinUrl: sampleData[0]?.linkedinUrl,
    },

    validate: (values) => {
      console.log("About-->", values, previewURL);
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
      setLoading(false);
      setFormSubmit(true);
    },
  });
  return {
    form,
    loading,
    formSubmit,
    previewURL,
    handleFileChange,
  };
};

export default useAboutEdit;
