import { ErrorMessage, Field } from "formik";
import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
}

const InputField = ({ label, name, type }: InputFieldProps) => (
  <label className=" mb-2">
    {label}:
    <Field
      className={"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"}
      type={type}
      name={name}
    />
    <ErrorMessage className="text-red-500 text-center" name={name} component="p" />
  </label>
);

export default InputField;
