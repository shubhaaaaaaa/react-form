import * as React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeName } from "../store/slices/userSlice.js";
import { SchemaCustom } from "../validations/LoginValidation.tsx";

// custom form components
import { getFormDetails } from "../jsonserver.js";
import { getAllDetails } from '../jsonserver.js'
import  { InputElement }  from "../components/form-elements/InputElement.tsx";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const id = useLocation().state;

  useEffect(() => {
    const fetchUsername = async () => {
      if (id) {
        const data = await getFormDetails(id);
        setUsername(data.username);
      }
    };

    fetchUsername();
  }, [id]);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          username: username,
          password: "",
        }}
        validationSchema={SchemaCustom}
        onSubmit={async (values, actions) => {
          const data = await getAllDetails();

          if (values.username === "admin" && values.password === "admin") {
            dispatch(storeName("admin"));
            localStorage.setItem("username", "admin");
            navigate("/dashboard");
          } else {
            const user = data.find(
              (user) =>
                user.username === values.username &&
                user.password === values.password
            );

            if (user) {
              dispatch(storeName(user.username));
              localStorage.setItem("username", user.username);
              localStorage.setItem("id", user.id);
              navigate("/success");
            } else {
              alert("Invalid username or password");
            }
          }

          actions.resetForm();
        }}>
        <Form className="login-container">
          {/* Login  */}
          <Box>
            <h1 className="text-[3rem] text-center font-bold tracking-tight mb-10">
              Skill<span className="text-primary">Camper</span>
            </h1>

            <Grid container rowSpacing={2} columnSpacing={5}>
              <Grid size={12}>
                <InputElement
                  placeholder="Username"
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

              <Grid size={12}>
                <InputElement
                  placeholder="Password"
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
            </Grid>
          </Box>
          <br />
          <Box className="flex justify-center gap-20">
            <Button
              fullWidth
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
              variant="contained"
              type="submit">
              Login
            </Button>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "0.8rem",
            }}>
            Already a user? <Link href="/signup">Signup here</Link>
          </Typography>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
