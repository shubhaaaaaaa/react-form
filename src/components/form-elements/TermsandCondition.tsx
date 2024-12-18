import React from "react";
import { useField } from "formik";
import { FormControl, Typography, Checkbox } from "@mui/joy";

export const TermsandCondition = ({ name }) => {
  const [field] = useField(name);

  return (
    <FormControl size="sm" sx={{ width: 400 }}>
      <Checkbox
        {...field}
        name={name}
        value={String(field.value)}
        label={
          <React.Fragment>
            I agree with the{" "}
            <Typography sx={{ fontWeight: "md" }}>
              terms and conditions
            </Typography>
            .
          </React.Fragment>
        }
      />
    </FormControl>
  );
};
