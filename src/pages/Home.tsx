import React from "react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../themes/Theme.tsx";

const Home = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="main h-screen flex flex-col justify-center items-center bg-darkblue text-white">
        <div className="text-center mb-16">
          <h1 className="text-[6rem] font-bold tracking-tight">
            Skill<span className="text-primary">Camper</span>
          </h1>
          <p className="text-[1.5rem] text-gray-300">
            Grow and gain your skills with us.
          </p>
        </div>

        <div className="flex gap-8">
          <Button
            variant="outlined"
            color="primary"
            href="/signup"
            sx={{
              "&:hover": {
                color: "white",
                border: "2px solid primary.main",
                backgroundColor: "primary.main",
              },
            }}
            startIcon={<PersonAddIcon />}>
            Signup
          </Button>

          <Button
            href="/login"
            variant="contained"
            color="primary"
            sx={{
              "&:hover": {
                color: "primary.main",
                border: "1px solid primary.main",
                backgroundColor: "transparent",
              },
            }}
            startIcon={<LoginIcon />}>
            Login
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
