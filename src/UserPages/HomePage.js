import React from "react";
import { Size } from "media-query";
import { SmallScreenLayout } from "components/DisplaySettings/SmallScreenLayout";
import { BigScreenLayout } from "components/DisplaySettings/BigScreenLayout";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Home = () => {
  const ScreenSize = Size();

  return (
    <div>
      {ScreenSize == "SM" || ScreenSize == "XS" ? (
        <SmallScreenLayout />
      ) : (
        <BigScreenLayout />
      )}
    </div>
  );
};
