import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import "react-datepicker/dist/react-datepicker.css";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import { Background1, Background2, SaveButtonStyle } from "./Display/feutures";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const SearchBy = () => {
  const size = Size();
  return (
    <>
      {size == "L" ? (
        <div
          style={{ backgroundColor: Background2, opacity: "90%" }}
          className="rounded-md p-1 shadow-inner"
        >
          <div className="rounded-md text-center my-auto text-gray-light">
            Search by
          </div>
          <div className="rounded-md grid grid-rows-2 gap-1 p-1">
            <Button
              size="small"
              sx={{
                backgroundColor: "#e3e3e3",
                opacity: "75%",
                maxHeight: "30pt",
              }}
            >
              <div className="text-center my-auto text-gray-dark">Site</div>
            </Button>
            <Button
              size="small"
              sx={{
                backgroundColor: "#e3e3e3",
                opacity: "75%",
                maxHeight: "30pt",
              }}
            >
              <div className="text-center my-auto text-gray-dark">
                Technician
              </div>
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
            <div className="text-center my-auto text-gray-light">Site</div>
            <div className="flex align-center justify-center">
              <Switch color="error" />
            </div>
            <div className="text-center my-auto text-gray-light">
              Technician
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const DateTimePicker = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker closeOnSelect={true} />
      </LocalizationProvider>
    </>
  );
};

const SearchField = () => {
  const size = Size();
  return (
    <>
      {size == "XS" || size == "SM" || size == "MD" ? (
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
          <div className="flex mx-auto my-auto mt-1">
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
      ) : (
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
          <div className="flex mx-auto my-auto mt-1">
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
      )}
    </>
  );
};

export const SearchBar = () => {
  const size = Size();
  return (
    <Slide direction="left" in={true} timeout={1200}>
      {size == "XS" || size == "SM" || size == "MD" ? (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="rounded-md p-2 mt-2"
        >
          <div className="grid grid-flow-row gap-2 rounded-md">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="flex align-center justify-center rounded-md p-4 shadow-md"
            >
              <DateTimePicker />
            </div>
            <SearchBy />
            <SearchField />
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="rounded-md p-2"
        >
          <div className="grid grid-flow-col gap-2 rounded-md">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="flex align-center justify-center rounded-md p-4 shadow-md"
            >
              <DateTimePicker />
            </div>
            <SearchBy />
            <SearchField />
          </div>
        </div>
      )}
    </Slide>
  );
};
