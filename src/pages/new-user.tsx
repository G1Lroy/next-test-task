import { createUser } from "@/apiService";
import { Field, ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import InputField from "@/components/InputField";



interface FormValues {
  name: string;
  username: string;
  email: string;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  // Dont add email validation for less time testing
  email: Yup.string().required("Email is required"),
});
const initialFormValues: FormValues = {
  name: "",
  username: "",
  email: "",
};


const NewUser = () => {
  const [userResponse, setUserResponse] = useState<string>("");

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const newUser = await createUser(JSON.stringify(values));
    setUserResponse(JSON.stringify(newUser));
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-neutral-300 text-black rounded-md shadow-md">
      <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <InputField label="Name" name="name" type="text"  />
          <InputField label="Username" name="username" type="text"  />
          <InputField label="Email" name="email" type="text"  />
          <button
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700"
            type="submit"
          >
            Create New User
          </button>
          <ErrorMessage className="text-red-500 mt-2" name="form" component="p" />
        </Form>
      </Formik>
      <div className="mt-4">{userResponse}</div>
    </div>
  );
};

export default NewUser;
