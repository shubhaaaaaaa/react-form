import React from "react";
import { useField, useFormikContext } from "formik";
import { FormLabel, FormControl } from "@mui/material";
import { Select, Option } from "@mui/joy";
import { useState } from "react";

export const SelectElement = ({ name }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = useState("select");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFieldValue(name, newValue);
  };

  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: 12,
          paddingBottom: "5px",
        }}>
        Education
      </FormLabel>

      <Select
        {...field}
        onChange={handleChange}
        value={value}
        defaultValue="select"
        name={name}>
        <Option value="select" disabled>
          Select
        </Option>
        <Option value="graduate">Graduate</Option>
        <Option value="high school">High school</Option>
        <Option value="middle school">Middle school</Option>
      </Select>
    </FormControl>
  );
};
