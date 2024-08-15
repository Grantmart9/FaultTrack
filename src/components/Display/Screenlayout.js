import React from "react";
import ReactDOM from "react-dom";
import Grow from "@mui/material/Grow";
import { TopBar } from "components/Display/TopBar";
import Cookies from "universal-cookie";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
const cookies = new Cookies();

export const ScreenLayout = () => {
  return (
    <div>
      <TopBar />
      <div>
        <ScreenLayoutInner />
      </div>
    </div>
  );
};
