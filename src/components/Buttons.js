import React from "react";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";
import {
  Background1,
  ButtonStyle,
  SaveButtonStyle,
} from "./Display/feutures";

export const Buttons = ({ handleAdd, handleSearch }) => {
  return (
    <Fade in={true} timeout={500}>
      <div
        style={{
          backgroundColor: Background1,
          opacity: "90%",
          minWidth:"150pt"
        }}
        className="grid grid-rows-2 gap-2 bg-gray-light rounded-md p-2"
      >
        <Button
          fullWidth={true}
          className="shadow-md"
          sx={SaveButtonStyle}
          onClick={handleAdd}
        >
          Add New Job
        </Button>
        <Button
          fullWidth={true}
          className="shadow-md"
          sx={SaveButtonStyle}
          onClick={handleSearch}
        >
          Job History
        </Button>
      </div>
    </Fade>
  );
};
