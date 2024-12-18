import React from "react";
import { FormLabel, FormControl } from "@mui/material";
import { Radio, RadioGroup } from "@mui/joy";
import { useField } from "formik";

export const RadioElement = ({ name }) => {
  const [field] = useField(name);

  return (
    <>
      <FormControl>
        <FormLabel
          sx={{
            fontSize: 12,
            paddingBottom: "5px",
          }}>
          Gender
        </FormLabel>

        <RadioGroup
          {...field}
          name={name}
          orientation="horizontal">
          <Radio value="female" label="Female" />
          <Radio value="male" label="Male" />
          <Radio value="others" label="Others" />
        </RadioGroup>
      </FormControl>
    </>
  );
};
