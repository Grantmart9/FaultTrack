import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Dashboard = () => {
  const size = Size();
  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div>
          <div
            style={{ color: "#da4540", font: "bold", marginTop: "15%" }}
            className="text-2xl flex align-center justify-center mb-2 p-2 w-full"
          >
            Dashboard
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ color: "#da4540", marginTop: "1pt", font: "bold" }}
            className="text-2xl flex align-center justify-center mb-2 p-2 w-full"
          >
            Dashboard
          </div>
        </div>
      )}
    </div>
  );
};
