import React from "react";
import Grow from "@mui/material/Grow";
import { TopBar } from "components/DisplaySettings/TopBar";
import Cookies from "universal-cookie";
import {ScreenLayoutInner} from "../DisplaySettings/ScreenLayoutInner"

export const SmallScreenLayout = () => {
  return (
    <div>
      <TopBar />
      <div>
        <ScreenLayoutInner />
      </div>
    </div>
  );
};
