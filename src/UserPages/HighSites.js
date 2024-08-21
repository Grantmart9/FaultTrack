import React, { useState, useEffect, useRef } from "react";
import { Buttons } from "components/Buttons/Buttons";
import { Size } from "media-query";
//import Cookies from "universal-cookie";
import { SearchBar } from "components/searchBar";
import { Sheets, ConditionList } from "components/Data/Sheets";
import { JobDetails } from "components/JobDetails";
import { SearchResults } from "components/Tables/SearchResults";
import Cookies from "universal-cookie";
import Moment from "moment";
import {
  PopoverCamera,
  PopoverSaved,
  PopoverSubmitted,
} from "components/PopOvers/Popovers";
import { PreventativeSheet } from "components/Tables/Preventative";
import { SelectedSheet, SheetButtons } from "components/CheckSheets";

const cookies = new Cookies();

export const HighSites = () => {
  const [QuestionSheet, setQuestionSheet] = useState(Sheets[0].Questions);
  const [selectedSheet, setSelectedSheet] = useState(Sheets[0].Sheet);
  const [ButtonStatus, setButtonStatus] = useState("Search");
  const [Saved, setSaved] = useState(false);
  const [Sheet, setSheet] = useState("Observation");
  const [Camera, setCamera] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  var mapp;
  const t = {
    State: "",
    observation: "",
    images: "",
  };

  useEffect(() => {
    const Sheet = Sheets.map((sheet) => sheet);
    const Questions = Sheet.map((q) => q.Questions);
    const sheet_1 = Questions[0];
    const sheet_2 = Questions[1];
    const sheet_3 = Questions[2];
    const sheet_4 = Questions[3];
    const Mapped = sheet_1.map((q) => ({
      q: { State: "", observation: "", images: "" },
    }));
    console.log(Mapped);
  }, []);

  const size = Size();
  Moment.locale("en");

  const handleOpen = () => setSaved(true);

  const handleSubmit = () => setSubmitted(true);

  const handleObservation = () => {
    setSheet("Observation");
    console.log(Sheet);
  };
  const handleRepair = () => {
    setSheet("Repaired");
    console.log(Sheet);
  };

  const handleClose = () => {
    setSaved(false);
    setSubmitted(false);
    setCamera(false);
  };

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

  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      <div>
        <div
          style={{ color: "#da4540", font: "bold" }}
          className="text-2xl font-bold font-sans flex align-center justify-center p-2 w-full"
        >
          High Sites
        </div>
        <div>
          {ButtonStatus == "Check_sheets" ? (
            <div>
              {size == "XS" || size == "SM" || size == "MD" ? (
                <div>
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <JobDetails />
                  <SelectedSheet
                    QuestionSheet={QuestionSheet}
                    selectedSheet={selectedSheet}
                    handleSubmit={handleSubmit}
                    handleOpen={handleOpen}
                    ConditionList={ConditionList}
                    handleMaintenance={handleMaintenance}
                    Sheets={Sheets}
                    handleSheet={handleSheet}
                    handleCamera={handleCamera}
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
                  <SelectedSheet
                    QuestionSheet={QuestionSheet}
                    selectedSheet={selectedSheet}
                    handleSubmit={handleSubmit}
                    handleOpen={handleOpen}
                    ConditionList={ConditionList}
                    handleMaintenance={handleMaintenance}
                    Sheets={Sheets}
                    handleSheet={handleSheet}
                    handleCamera={handleCamera}
                  />
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
                  <SheetButtons
                    handleMaintenance={handleMaintenance}
                    Sheets={Sheets}
                    handleSheet={handleSheet}
                  />
                  <PreventativeSheet
                    Sheet={Sheet}
                    SheetButtons={SheetButtons}
                    handleObservation={handleObservation}
                    handleRepair={handleRepair}
                    handleSubmit={handleSubmit}
                  />
                </div>
              ) : (
                <div>
                  <div className="grid grid-flow-col gap-1">
                    <Buttons
                      handleAdd={handleAdd}
                      handleSearch={handleSearch}
                      handleObservation={handleObservation}
                      handleRepair={handleRepair}
                    />
                    <JobDetails />
                  </div>
                  <SheetButtons
                    handleMaintenance={handleMaintenance}
                    Sheets={Sheets}
                    handleSheet={handleSheet}
                  />
                  <PreventativeSheet
                    Sheet={Sheet}
                    SheetButtons={SheetButtons}
                    handleObservation={handleObservation}
                    handleRepair={handleRepair}
                    handleSubmit={handleSubmit}
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
