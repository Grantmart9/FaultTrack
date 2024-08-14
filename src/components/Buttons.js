import React from "react";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";
import { Background1, ButtonStyle, SaveButtonStyle } from "./DisplaySettings/feutures";

export const Buttons = ({ handleAdd, handleSearch }) => {
  return (
    <Fade in={true} timeout={500}>
      <div
        style={{
          backgroundColor: Background1,
          opacity: "90%",
          maxWidth: "150pt",
          minWidth: "150pt",
        }}
        className="grid grid-rows-2 gap-2 bg-gray-light rounded-md p-2"
      >
        <Button className="shadow-md" sx={SaveButtonStyle} onClick={handleAdd}>
          Add New Job
        </Button>
        <Button className="shadow-md" sx={SaveButtonStyle} onClick={handleSearch}>
          Job History
        </Button>
      </div>
    </Fade>
  );
};
