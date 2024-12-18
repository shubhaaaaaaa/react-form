import React from "react";
import { Slider } from "@mui/joy";
import { FormLabel, FormControl } from "@mui/material";
import { useField } from "formik";

export const SliderElement = ({ name }) => {
  const [field] = useField(name);

  return (
    <FormControl sx={{ width: 200 }}>
      <FormLabel
        sx={{
          fontSize: "0.7rem",
        }}>
        English Profiency
      </FormLabel>

      <Slider
        {...field}
        disabled={false}
        marks
        valueLabelDisplay="auto"
        max={5}
        value={Number(field.value)}
        name={name}
        sx={{
          "--Slider-thumbSize": "10px",
          "--Slider-trackSize": "6px",
          "--Slider-markSize": "3px",
          "--Slider-thumbWidth": "10px",
          "--Slider-valueLabelArrowSize": "9px",
        }}
      />
    </FormControl>
  );
};

