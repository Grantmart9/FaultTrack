import React from "react";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";
import { Size } from "media-query";
import {
  ButtonStyle,
  SaveButtonStyle,
  Background1,
  Background2,
} from "components/Display/feutures";

export const Buttons = ({ handleAdd, handleSearch }) => {
  const size = Size();
  return (
    <Fade in={true} timeout={500}>
      {size == "SM" ||
      size == "XS" ||
      size == "MD" ||
      size == "L" ||
      size == "XL" ? (
        <div
          style={{
            backgroundColor: Background1,
            opacity: "90%",
          }}
          className="grid grid-rows-2 gap-2 bg-gray-light rounded-md p-2 w-full"
        >
          <Button
            fullWidth={true}
            size="small"
            className="shadow-md"
            sx={SaveButtonStyle}
            onClick={handleAdd}
          >
            Add New Job
          </Button>
          <Button
            fullWidth={true}
            size="small"
            className="shadow-md"
            sx={SaveButtonStyle}
            onClick={handleSearch}
          >
            Job History
          </Button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: Background1,
            opacity: "90%",
          }}
          className="grid grid-cols-2 gap-2 bg-gray-light rounded-md p-2 w-full"
        >
          <Button
            fullWidth={true}
            className="shadow-md"
            size="small"
            sx={{
              maxWidth: "200pt",
              backgroundColor: "#424242",
              opacity: "75%",
              color: "#ffffff",
            }}
            onClick={handleAdd}
          >
            Add New Job
          </Button>
          <Button
            fullWidth={true}
            size="small"
            className="shadow-md"
            sx={{
              maxWidth: "150pt",
              backgroundColor: "#424242",
              opacity: "75%",
              color: "#ffffff",
            }}
            onClick={handleSearch}
          >
            Job History
          </Button>
        </div>
      )}
    </Fade>
  );
};
