import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import { fontType } from "components/DisplaySettings/feutures";
const cookies = new Cookies();

export const Account = () => {
  const size = Size();
  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div>
          <div
            style={{ color: "#da4540", font: "bold", marginTop: "15%",fontFamily:fontType }}
            className="text-2xl flex align-center justify-center mb-2 p-2 w-full"
          >
            Account
          </div>
          <div>
            <div className="grid grid-rows-2">
              <div>
                <div className="text-center my-auto">Username:</div>
                <div className="text-center my-auto">
                  {cookies.get("Username")}
                </div>
              </div>
              <div>
                <div className="text-center my-auto">Password:</div>
                <div className="text-center my-auto">
                  {cookies.get("Password")}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ color: "#da4540", marginTop: "1pt", font: "bold",fontFamily:fontType }}
            className="text-2xl flex align-center justify-center mb-2 p-2 w-full"
          >
            Account
          </div>
          <div>
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-2">
                <div className="text-center my-auto">Username:</div>
                <div className="text-center my-auto">
                  {cookies.get("Username")}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-center my-auto">Password:</div>
                <div className="text-center my-auto">
                  {cookies.get("Password")}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
