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
    skills: ["Option 1", "Option 2"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
];

const useEducationEdit = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [education, setEducation] = useState(sampleData[0]?.education || [""]);

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      education: sampleData[0]?.education || [""],
    },

    onSubmit: (values) => {
      values.education = education;
      console.log("values", values);
      setLoading(false);
      setFormSubmit(true);
    },
  });

  return {
    form,
    loading,
    education,
    setEducation,
    formSubmit,
  };
};

export default useEducationEdit;
