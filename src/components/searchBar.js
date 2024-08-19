import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import { Background1, Background2, SaveButtonStyle } from "./Display/feutures";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MenuSimple } from "components/DropDown";

const SearchBy = () => {
  const size = Size();
  return (
    <>
      {size == "L" ? (
        <div
          style={{ backgroundColor: Background2, opacity: "90%" }}
          className="flex justify-center rounded-md p-1 shadow-inner"
        >
          <div className="block">
            <div className="text-center my-auto text-gray-light">Search By</div>
            <div className="my-auto">
              <MenuSimple />
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: Background2, opacity: "90%" }}
          className="flex justify-center rounded-md p-1 shadow-inner"
        >
          <div className="block">
            <div className="text-center my-auto text-gray-light">Search By</div>
            <div className="my-auto">
              <MenuSimple />
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
          <div className="mx-auto my-auto">
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
          <div className="mx-auto my-auto">
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
          <div className="grid grid-rows-3 gap-2 rounded-md">
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
          <div className="grid grid-cols-3 gap-2 rounded-md">
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
