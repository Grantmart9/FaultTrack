import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import "react-datepicker/dist/react-datepicker.css";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import { Background1, Background2 } from "./Display/feutures";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const SearchBar = () => {
  const size = Size();
  return (
    <Slide direction="left" in={true} timeout={1200}>
      {size == "SM" ||
      size == "XS" ||
      size == "MD" ||
      size == "L" ||
      size == "XL" ||
      size == "2XL" ? (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="rounded-md p-2 ml-1"
        >
          <div className="grid grid-cols-3 gap-2 rounded-md">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-4 shadow-md"
            >
              <div className="my-auto mx-auto">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["MobileDatePicker"]}>
                    <MobileDatePicker closeOnSelect={true} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>

            {size == "L" ? (
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-1 shadow-inner"
              >
                <div className=" rounded-md text-center my-auto text-gray-light">
                  Search by
                </div>
                <div className="rounded-md grid grid-cols-2 gap-1 p-1">
                  <Button
                    size="small"
                    fullwidth="true"
                    className="shadow-md"
                    sx={{
                      backgroundColor: "#e3e3e3",
                      opacity: "75%",
                      maxHeight: "30pt",
                    }}
                  >
                    <div className="text-xs text-gray-dark">Site</div>
                  </Button>
                  <Button
                    size="small"
                    fullwidth="true"
                    className="shadow-md"
                    
                    sx={{
                      backgroundColor: "#e3e3e3",
                      opacity: "75%",
                      maxHeight: "30pt",
                    }}
                  >
                    <div className="text-xs text-gray-dark">Technician</div>
                  </Button>
                </div>
              </div>
            ) : (
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-1 shadow-inner"
              >
                <div className="rounded-md text-center my-auto text-gray-light">
                  Search by
                </div>
                <div className="rounded-md grid grid-cols-3 p-1">
                  <div className="text-center my-auto text-gray-light">
                    Site
                  </div>
                  <div className="flex align-center justify-center">
                    <Switch color="error" />
                  </div>
                  <div className="text-center my-auto text-gray-light">
                    Technician
                  </div>
                </div>
              </div>
            )}
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="grid grid-flow-row rounded-md p-1 shadow-md"
            >
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                />
              </div>
              <div className="flex mx-auto my-auto">
                <Button
                  size="small"
                  fullwidth="true"
                  className="shadow-md"
                  sx={{
                    backgroundColor: "#e3e3e3",
                    opacity: "75%",
                    maxHeight: "30pt",
                  }}
                >
                  <div className="p-2 text-gray-dark">
                    Search
                    <SearchIcon />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="rounded-md p-2 ml-1"
        >
          <div className="grid grid-cols-3 gap-2 rounded-md">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-4 shadow-md"
            >
              <div className="my-auto mx-auto">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      size="small"
                      orientation="portrait"
                      closeOnSelect={true}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-1 shadow-inner"
            >
              <div className="rounded-md text-center my-auto text-gray-light">
                Search by
              </div>
              <div className="rounded-md grid grid-cols-3 p-1">
                <div className="text-center my-auto text-gray-light">Site</div>
                <div className="flex align-center justify-center">
                  <Switch color="error" />
                </div>
                <div className="text-center my-auto text-gray-light">
                  Technician
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="grid grid-flow-row rounded-md p-1 shadow-md"
            >
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                />
              </div>
              <div className="flex mx-auto my-auto">
                <Button
                  size="small"
                  fullwidth="true"
                  className="shadow-md"
                  sx={{
                    backgroundColor: "#e3e3e3",
                    opacity: "75%",
                    maxHeight: "30pt",
                  }}
                >
                  <div className="p-2 text-gray-dark">
                    Search
                    <SearchIcon />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
};
