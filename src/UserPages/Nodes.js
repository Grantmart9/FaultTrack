import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Buttons } from "components/Buttons/Buttons";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Size } from "media-query";
//import Cookies from "universal-cookie";
import { TextField } from "@mui/material";
import { SearchBar } from "components/searchBar";
import {
  SaveButtonStyle,
  CameraButtonStyle,
  ConditionButtonStyle,
  Background1,
  Background2,
} from "components/Display/feutures";
import { Sheets, ConditionList } from "components/Data/Sheets";
import { JobDetails } from "components/JobDetails";
import { SearchResults } from "components/Tables/SearchResults";
import Cookies from "universal-cookie";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Moment from "moment";
import {
  PopoverCamera,
  PopoverSaved,
  PopoverSubmitted,
} from "components/PopOvers/Popovers";
import { PreventativeSheet } from "components/Tables/Preventative";

const cookies = new Cookies();

export const Nodes = () => {
  const [QuestionSheet, setQuestionSheet] = useState(Sheets[0].Questions);
  const [selectedSheet, setSelectedSheet] = useState(Sheets[0].Sheet);
  const [ButtonStatus, setButtonStatus] = useState("Search");
  const handleOpen = () => setSaved(true);
  const handleSubmit = () => setSubmitted(true);
  const [Saved, setSaved] = useState(false);
  const [Sheet, setSheet] = useState("Observation");
  const [Camera, setCamera] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  Moment.locale("en");

  const handleClose = () => {
    setSaved(false);
    setSubmitted(false);
    setCamera(false);
  };
  const size = Size();

  const handleAdd = () => {
    setButtonStatus("Check_sheets");
  };

  const handleSearch = () => {
    setButtonStatus("Search");
  };

  const handleSheet = (item) => {
    setQuestionSheet(item.Questions);
    setSelectedSheet(item.Sheet);
    setButtonStatus("Check_sheets");
  };

  const handleMaintenance = () => {
    setButtonStatus("Preventative");
  };

  const handleCamera = () => {
    setCamera(true);
  };

  const SheetButtons = ({ handleMaintenance }) => {
    return (
      <div>
        {size == "MD" || size == "SM" || size == "XS" ? (
          <div
            style={{ backgroundColor: Background1, opacity: "90%" }}
            className="grid grid-flow-row gap-2 mt-1 p-2 rounded-md"
          >
            {Sheets.map((item) => (
              <Button
                onClick={() => handleSheet(item)}
                sx={SaveButtonStyle}
                fullWidth="true"
                className="shadow-md"
              >
                <div>{item.Sheet}</div>
              </Button>
            ))}
            <Button onClick={handleMaintenance} sx={SaveButtonStyle}>
              Preventative maintenance
            </Button>
          </div>
        ) : (
          <div
            style={{ backgroundColor: Background1, opacity: "90%" }}
            className="grid grid-flow-col gap-2 mt-1 p-2 rounded-md"
          >
            {Sheets.map((item) => (
              <Button
                onClick={() => handleSheet(item)}
                sx={SaveButtonStyle}
                fullWidth="true"
                className="shadow-md"
              >
                <div>{item.Sheet}</div>
              </Button>
            ))}
            <Button onClick={handleMaintenance} sx={SaveButtonStyle}>
              Preventative maintenance
            </Button>
          </div>
        )}
      </div>
    );
  };

  const Questions = () => {
    return (
      <>
        {size == "MD" || size == "SM" || size == "XS" ? (
          <Slide direction="up" in={true} timeout={1200}>
            <div
              className="grid grid-flow-row gap-1 w-full rounded-md p-1"
              style={{
                backgroundColor: Background1,
                opacity: "95%",
              }}
            >
              <div
                style={{
                  backgroundColor: Background2,
                  opacity: "80%",
                  color: "white",
                }}
                className="text-center my-auto p-3 rounded-md"
              >
                {selectedSheet}
              </div>
              {QuestionSheet.map((q) => (
                <div
                  style={{ backgroundColor: Background2, opacity: "90%" }}
                  className="rounded-md p-1"
                >
                  <div className="grid grid-flow-row gap-1">
                    <div
                      style={{ backgroundColor: Background2, opacity: "75%" }}
                      className="p-3 rounded-md text-center my-auto text-gray-light"
                    >
                      {q}
                    </div>
                    <div className="grid grid-flow-col gap-1 rounded-md">
                      {ConditionList.map((Condition) => (
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
                          {Condition == "Good" ? (
                            <div className="text-gray-dark">Good</div>
                          ) : null}
                          {Condition == "Bad" ? (
                            <div className="text-gray-dark">Bad</div>
                          ) : null}
                          {Condition == "NA" ? (
                            <div className="text-gray-dark">NA</div>
                          ) : null}
                        </Button>
                      ))}
                    </div>
                    <div
                      style={{ backgroundColor: Background2, opacity: "75%" }}
                      className="grid grid-flow-col rounded-md p-1"
                    >
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        className="rounded-md"
                        size="small"
                        fullWidth="true"
                        placeholder="Observations/Faults Report"
                      />
                      <div className="flex align-center justify-center">
                        <Button onClick={handleCamera} sx={CameraButtonStyle}>
                          <CameraAltIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex align-center justify-center mt-2 mb-2">
                <div className="grid grid-cols-2 gap-1">
                  <Button onClick={handleOpen} sx={CameraButtonStyle}>
                    Save
                  </Button>
                  <Button onClick={handleSubmit} sx={CameraButtonStyle}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </Slide>
        ) : (
          <Slide direction="up" in={true} timeout={1200}>
            <div
              className="grid grid-flow-row gap-1 w-full rounded-md p-1"
              style={{
                backgroundColor: Background1,
                opacity: "95%",
              }}
            >
              <div
                style={{
                  backgroundColor: Background2,
                  opacity: "80%",
                  color: "white",
                }}
                className="text-center my-auto p-3 rounded-md"
              >
                {selectedSheet}
              </div>
              {QuestionSheet.map((q) => (
                <div className="grid grid-cols-3 gap-1">
                  <div
                    style={{ backgroundColor: Background2, opacity: "75%" }}
                    className="p-3 rounded-md text-center my-auto text-gray-light"
                  >
                    {q}
                  </div>
                  <div className="grid grid-flow-col gap-1 rounded-md">
                    {ConditionList.map((Condition) => (
                      <Button
                        className="shadow-md"
                        fullWidth="true"
                        sx={ConditionButtonStyle}
                      >
                        {Condition == "Good" ? (
                          <div className="text-gray-light">Good</div>
                        ) : null}
                        {Condition == "Bad" ? (
                          <div className="text-gray-light">Bad</div>
                        ) : null}
                        {Condition == "NA" ? (
                          <div className="text-gray-light">NA</div>
                        ) : null}
                      </Button>
                    ))}
                  </div>
                  <div
                    style={{ backgroundColor: Background2, opacity: "75%" }}
                    className="grid grid-flow-col rounded-md p-1"
                  >
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                      placeholder="Observations/Faults Report"
                    />
                    <div className="flex align-center justify-center">
                      <Button onClick={handleCamera} sx={CameraButtonStyle}>
                        <CameraAltIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex align-center justify-center mt-2 mb-2">
                <div className="grid grid-cols-2 gap-1">
                  <Button onClick={handleOpen} sx={CameraButtonStyle}>
                    Save
                  </Button>
                  <Button onClick={handleSubmit} sx={CameraButtonStyle}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </Slide>
        )}
      </>
    );
  };

  const SelectedSheet = () => {
    return (
      <Fade in={true} timeout={600}>
        <div>
          <SheetButtons handleMaintenance={handleMaintenance} />
          <div className="flex align-center justify-center mt-1">
            <Questions />
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      <div>
        <div
          style={{ color: "#da4540", font: "bold", marginTop: "1%" }}
          className="text-2xl font-bold font-sans flex align-center justify-center p-2 w-full"
        >
          Nodes
        </div>
        <div>
          {ButtonStatus == "Check_sheets" ? (
            <div>
              {size == "XS" || size == "SM" || size == "MD" ? (
                <div>
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <JobDetails />
                  <SelectedSheet />
                </div>
              ) : (
                <div>
                  <div className="grid grid-flow-col gap-1">
                    <Buttons
                      handleAdd={handleAdd}
                      handleSearch={handleSearch}
                    />
                    <JobDetails />
                  </div>
                  <SelectedSheet />
                </div>
              )}
            </div>
          ) : null}
          {ButtonStatus == "Search" ? (
            <div>
              {size == "XS" || size == "SM" || size == "MD" ? (
                <div>
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <SearchBar />
                  <SearchResults />
                </div>
              ) : (
                <div>
                  <div className="grid grid-flow-col gap-1">
                    <Buttons
                      handleAdd={handleAdd}
                      handleSearch={handleSearch}
                    />
                    <SearchBar />
                  </div>
                  <SearchResults />
                </div>
              )}
            </div>
          ) : null}
          {ButtonStatus == "Preventative" ? (
            <div>
              {size == "XS" || size == "SM" || size == "MD" ? (
                <div>
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <JobDetails />
                  <SheetButtons />
                  <PreventativeSheet
                    Sheet={Sheet}
                    SheetButtons={SheetButtons}
                  />
                </div>
              ) : (
                <div>
                  <div className="grid grid-flow-col gap-1">
                    <Buttons
                      handleAdd={handleAdd}
                      handleSearch={handleSearch}
                    />
                    <JobDetails />
                  </div>
                  <SheetButtons />
                  <PreventativeSheet
                    Sheet={Sheet}
                    SheetButtons={SheetButtons}
                  />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <PopoverSaved Saved={Saved} handleClose={handleClose} />
        <PopoverSubmitted Submitted={Submitted} handleClose={handleClose} />
        <PopoverCamera Camera={Camera} handleClose={handleClose} />
      </div>
    </div>
  );
};
