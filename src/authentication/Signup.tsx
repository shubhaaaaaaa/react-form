import * as React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

// custom form components
import  { InputElement }  from "../components/form-elements/InputElement.tsx";
import { RadioElement } from "../components/form-elements/RadioElement.tsx";
import { SelectElement } from "../components/form-elements/SelectElement.tsx";
import { CheckboxElement } from "../components/form-elements/CheckboxElement.tsx";
import { SliderElement } from "../components/form-elements/SliderElement.tsx";
import { TextareaElement } from "../components/form-elements/TextareaElement.tsx";
import { TermsandCondition } from "../components/form-elements/TermsandCondition.tsx";

//validation
import { SchemaCustom } from "../validations/SchemaCustom.tsx";
//json server
import { postToForm } from "../jsonserver.js";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          id: Math.floor(
            Math.random() * Math.floor(Math.random() * Date.now())
          ).toString(),
          address: "",
          condition: false,
          dob: "",
          education: "",
          email: "",
          fname: "",
          gender: "female",
          interests: [],
          lname: "",
          number: "",
          rating: "",
          textarea: "",
          username: "",
          password: "",
          repassword: "",
        }}
        validationSchema={SchemaCustom}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            postToForm(values);
            actions.setSubmitting(false);
            actions.resetForm();
            navigate("/login", { state: values.id });
          }, 1000);
        }}>
        <Form className="main-container">
          {/* Personal Info  */}
          <Box
            border={1}
            borderColor="#ff5630"
            sx={{
              borderRadius: "5px",
              padding: "2rem",
              backgroundColor: "white",
            }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
                color: "#001f3f",
              }}>
              Personal Information
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={5}>
              <Grid size={6} className="mb-2">
                <InputElement
                  placeholder=""
                  label="First Name"
                  type="text"
                  name="fname"
                />
                <ErrorMessage
                  name="fname"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={6} className="mb-2">
                <InputElement
                  placeholder=""
                  label="Last Name"
                  type="text"
                  name="lname"
                />
                <ErrorMessage
                  name="lname"
                  component="div"
                  className="error-text"
                />
              </Grid>

              <Grid size={4}>
                <InputElement
                  placeholder=""
                  label="Contact Number"
                  type="number"
                  name="number"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={4}>
                <InputElement
                  placeholder=""
                  label="Address"
                  type="text"
                  name="address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={4}>
                <InputElement
                  placeholder=""
                  label="Email"
                  type="text"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />
              </Grid>

              <Grid size={4}>
                <RadioElement name="gender" />
              </Grid>
              <Grid size={4} className="mt-5">
                <InputElement
                  placeholder=""
                  label="Date of Birth"
                  type="date"
                  name="dob"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={4}>
                <SelectElement name="education" />
                <ErrorMessage
                  name="education"
                  component="div"
                  className="error-text"
                />
              </Grid>
            </Grid>
          </Box>
          <br /> <br />
          {/* Additional Info  */}
          <Box
            border={1}
            borderColor="#ff5630"
            sx={{
              borderRadius: "5px",
              padding: "2rem",
              backgroundColor: "white",
            }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
                color: "#001f3f",
              }}>
              Additional Information
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={5}>
              <Grid size={4}>
                <CheckboxElement name="interests" />
                <ErrorMessage
                  name="interests"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={8}>
                <SliderElement name="rating" />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="error-text"
                />
                <TextareaElement name="textarea" />
                <ErrorMessage
                  name="textarea"
                  component="div"
                  className="error-text"
                />
              </Grid>
            </Grid>
          </Box>
          <br /> <br />
          {/* Credential Details  */}
          <Box
            border={1}
            borderColor="#ff5630"
            sx={{
              borderRadius: "5px",
              padding: "2rem",
              backgroundColor: "white",
              color: "#001f3f",
            }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
              }}>
              Credential Details
            </Typography>

            <Grid container rowSpacing={2} columnSpacing={5}>
              <Grid size={12}>
                <InputElement
                  placeholder="6 character username"
                  label="Username"
                  type="text"
                  name="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-text"
                />
              </Grid>

              <Grid size={6}>
                <InputElement
                  placeholder="Enter password"
                  label="Password"
                  type="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-text"
                />
              </Grid>
              <Grid size={6}>
                <InputElement
                  placeholder="Retype password"
                  label="Retype Password"
                  type="password"
                  name="repassword"
                />
                <ErrorMessage
                  name="repassword"
                  component="div"
                  className="error-text"
                />
              </Grid>

              <Grid size={12}>
                <TermsandCondition name="condition" />
                <ErrorMessage
                  name="condition"
                  component="div"
                  className="error-text"
                />
              </Grid>
            </Grid>
          </Box>
          <br /> <br />
          <Box className="flex justify-center gap-20">
            <Button
              href="/"
              sx={{
                width: "20rem",
                backgroundColor: "#d32f2f",
                color: "white",
                "&:hover": {
                  backgroundColor: "#b71c1c",
                },
              }}
              variant="contained">
              Cancel
            </Button>

            <Button
              sx={{
                width: "20rem",
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
              variant="contained"
              type="submit">
              Sign Up
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default Signup;
