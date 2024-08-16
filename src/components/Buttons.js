import React from "react";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";
import { Size } from "media-query";
import { Background1, ButtonStyle, SaveButtonStyle } from "./Display/feutures";

export const Buttons = ({ handleAdd, handleSearch }) => {
  const size = Size();
  return (
    <Fade in={true} timeout={500}>
      {size == "SM" || size == "XS" || size == "MD"|| size == "L"|| size == "XL" ? (
        <div
          style={{
            backgroundColor: Background1,
            opacity: "90%",
            minWidth: "150pt",
          }}
          className="grid grid-rows-2 gap-2 bg-gray-light rounded-md p-2"
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
            minWidth: "150pt",
          }}
          className="grid grid-cols-2 gap-2 bg-gray-light rounded-md p-2"
        >
          <Button
            fullWidth={true}
            className="shadow-md"
            size="small"
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
      )}
    </Fade>
  );
};
