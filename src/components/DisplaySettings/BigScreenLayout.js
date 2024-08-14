import React from "react";
import ReactDOM from "react-dom";
import Grow from "@mui/material/Grow";
import { TopBar } from "components/DisplaySettings/TopBar";
import Cookies from "universal-cookie";
import { ScreenLayoutInner } from "../DisplaySettings/ScreenLayoutInner";
const cookies = new Cookies();

export const BigScreenLayout = () => {
  return (
    <div>
      <TopBar />
      <div>
        <ScreenLayoutInner />
      </div>
    </div>
  );
};
