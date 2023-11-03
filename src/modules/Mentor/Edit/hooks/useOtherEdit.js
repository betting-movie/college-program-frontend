const { useFormik } = require("formik");
const { useState } = require("react");

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

const useOtherEdit = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      consultation_cost: sampleData[0]?.consultation_cost,
      rating: sampleData[0]?.rating,
      mentees: sampleData[0]?.mentees,
      availability: sampleData[0]?.availability,
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
      setLoading(false);
      setFormSubmit(true);
    },
  });
  return {
    form,
    loading,
    formSubmit,
  };
};

export default useOtherEdit;
