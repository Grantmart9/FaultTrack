import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Buttons } from "components/Buttons";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Size } from "media-query";
//import Cookies from "universal-cookie";
import { TextField } from "@mui/material";
import { SearchBar } from "components/searchBar";
import {
  ButtonStyle,
  SaveButtonStyle,
  CameraButtonStyle,
  PopoverStyle,
  ConditionButtonStyle,
  Background1,
  Background2,
  videoConstraints,
} from "components/DisplaySettings/feutures";
import {
  Sheets,
  Site_sheets,
  Preventative_sheets,
  ConditionList,
} from "components/Data/Sheets";
import { JobDetails } from "components/JobDetails";
import Cookies from "universal-cookie";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { fontType } from "components/DisplaySettings/feutures";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
//import ThumbUpIcon from "@mui/icons-material/ThumbUp";
//import ThumbDownIcon from "@mui/icons-material/ThumbDown";
//import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Webcam from "react-webcam";
import Moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const cookies = new Cookies();
const WebcamComponent = () => <Webcam />;

export const HighSites = () => {
  const [QuestionSheet, setQuestionSheet] = useState(Sheets[0].Questions);
  const [selectedSheet, setSelectedSheet] = useState(Sheets[0].Sheet);
  const [ButtonOn, setButtonOn] = useState("Search");
  const handleOpen = () => setSaved(true);
  const handleSubmit = () => setSubmitted(true);
  const [Saved, setSaved] = useState(false);
  const [Notes, setNotes] = useState(false);
  const [Sheet, setSheet] = useState("Observation");
  const [Camera, setCamera] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  Moment.locale("en");
  const handleClose = () => {
    setSaved(false);
    setNotes(false);
    setSubmitted(false);
    setCamera(false);
  };
  const size = Size();

  const handleAdd = () => {
    setButtonOn("Check_sheets");
    console.log(ButtonOn);
  };

  const handleSearch = () => {
    setButtonOn("Search");
    console.log(ButtonOn);
  };

  const handleSheet = (item) => {
    setQuestionSheet(item.Questions);
    setSelectedSheet(item.Sheet);
    setButtonOn("Check_sheets");
    console.log(ButtonOn);
  };

  const handleMaintenance = () => {
    setButtonOn("Preventative");
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

  const PopoverSaved = () => {
    return (
      <div>
        <Modal
          open={Saved}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={PopoverStyle}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Sucessfully Saved !
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  const PopoverSubmitted = () => {
    return (
      <div>
        <Modal
          open={Submitted}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={PopoverStyle}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Sucessfully Submitted !
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  const PopoverNotes = () => {
    return (
      <div>
        <Modal
          open={Notes}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={PopoverStyle}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div className="inline ">
                <div className="text-center">Note:</div> <TextField />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  const PopoverCamera = () => {
    return (
      <div>
        <Modal
          open={Camera}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={PopoverStyle}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
              >
                {({ getScreenshot }) => (
                  <div className="mt-3">
                    <Button
                      sx={SaveButtonStyle}
                      onClick={() => {
                        const imageSrc = getScreenshot();
                      }}
                    >
                      Capture photo
                    </Button>
                  </div>
                )}
              </Webcam>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

  const PreventativeSheet = () => {
    return (
      <Fade in={true} timeout={600}>
        <div>
          <SheetButtons handleMaintenance={handleMaintenance} />
          <div className="Block">
            <div
              style={{ backgroundColor: Background1, opacity: "90%" }}
              className="grid grid-cols-2 gap-1 p-1 rounded-md mt-1 mb-1"
            >
              <Button
                onClick={() => setSheet("Observation")}
                sx={SaveButtonStyle}
              >
                Observation
              </Button>
              <Button onClick={() => setSheet("Repaired")} sx={SaveButtonStyle}>
                Repaired
              </Button>
            </div>
            <div
              style={{ backgroundColor: Background1, opacity: "90%" }}
              className="flex align-center justify-center p-1 rounded-md mt-1 mb-1"
            >
              {Sheet}
            </div>
            <div>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Item Description</TableCell>
                      <TableCell align="left">Section</TableCell>
                      <TableCell align="left">Leg</TableCell>
                      <TableCell align="left">Height</TableCell>
                      <TableCell align="left">Quantity</TableCell>
                      <TableCell align="left">Fault Description</TableCell>
                      <TableCell align="left">Priority</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          className="rounded-md"
                          size="small"
                          fullWidth="true"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex align-center justify-center mt-2 mb-2">
                  <Button sx={SaveButtonStyle}>Add</Button>
                </div>
              </TableContainer>
            </div>
          </div>
        </div>
      </Fade>
    );
  };

  const SearchResults = () => {
    function createData(Date, Site, Technician, Status) {
      return { Date, Site, Technician, Status };
    }

    const rows = [
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 13 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 12 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 11 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 10 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 9 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 8 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 15 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 18 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 17 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 19 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 1 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
    ];

    return (
      <div
        style={{ backgroundColor: Background1, opacity: "80%" }}
        className="rounded-md p-1 shadow-md mt-2"
      >
        <Fade in={true} timeout={600}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Site</TableCell>
                  <TableCell align="left">Technician</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Sheet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.Date}</TableCell>
                    <TableCell align="left">{row.Site}</TableCell>
                    <TableCell align="left">{row.Technician}</TableCell>
                    <TableCell align="left">{row.Status}</TableCell>
                    <TableCell align="left">
                      <Button sx={SaveButtonStyle}>Sheets</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Fade>
      </div>
    );
  };

  const JobDetailsSmall = () => {
    return (
      <div>
        <Slide direction="left" in={true} timeout={800}>
          <div
            style={{ backgroundColor: Background1, opacity: "90%" }}
            className="bg-gray-light rounded-md p-1 w-full mt-1"
          >
            <div className="grid grid-flow-row gap-2 rounded-md p-1">
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-2"
              >
                <div className="grid grid-flow-row gap-1">
                  <div className="grid grid-flow-col gap-1">
                    <div className="text-center my-auto text-gray-light">
                      Site access ref no
                    </div>
                    <div className="my-auto">
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        className="rounded-md"
                        size="small"
                        fullWidth="true"
                        placeholder="ex J432212"
                      />
                    </div>
                  </div>
                  <div className="grid grid-flow-col gap-1">
                    <div className="text-center my-auto text-gray-light">
                      GPS co-ordinates
                    </div>
                    <div className="my-auto">
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        className="rounded-md"
                        size="small"
                        fullWidth="true"
                        placeholder="ex 39.23.45.12.55"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-2"
              >
                <div className="text-center my-auto text-gray-light">Date</div>
                <div
                  style={{
                    minHeight: "30pt",
                    alignContent: "center",
                  }}
                  className="text-center text-gray-light"
                >
                  {Moment(Date()).format("MMMM Do YYYY, h:mm a")}
                </div>
              </div>
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-2"
              >
                <div className="text-center my-auto text-gray-light">
                  Technician
                </div>
                <div
                  style={{
                    minHeight: "30pt",
                    alignContent: "center",
                  }}
                  className="text-center text-gray-light"
                >
                  {cookies.get("Username")}
                </div>
              </div>
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-2"
              >
                <div className="text-center my-auto text-gray-light">Site</div>
                <div className="flex align-center justify-center">
                  <TextField
                    sx={{ backgroundColor: "white" }}
                    className="rounded-md"
                    size="small"
                    fullWidth="true"
                    placeholder="ex Kannonkop"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  };

  const SearchBarSmall = () => {
    return (
      <div>
        <Slide direction="left" in={true} timeout={1200}>
          <div
            style={{ backgroundColor: Background1, opacity: "90%" }}
            className="rounded-md p-2 mt-1"
          >
            <div className="grid grid-flow-row gap-2 rounded-md">
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="grid grid-flow-col gap-1 rounded-md p-1 shadow-md"
              >
                <div className="text-center my-auto text-gray-light">Date</div>
                <div className="my-auto mx-auto">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker closeOnSelect={true} />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-1 shadow-inner"
              >
                <div className="rounded-md text-center my-auto text-gray-light mb-1">
                  Search by
                </div>
                <div className="rounded-md grid grid-cols-3 p-1">
                  <div className="text-center my-auto text-gray-light">
                    Site
                  </div>
                  <div className="flex align-center justify-center">
                    <Switch color="error" />
                  </div>
                  <div className="text-center my-auto text-gray-light">
                    Technician
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="grid grid-cols-2 rounded-md p-1 shadow-md"
              >
                <div className="ml-2 my-auto">
                  <TextField
                    sx={{ backgroundColor: "white" }}
                    className="rounded-md"
                    size="small"
                    fullWidth="true"
                  />
                </div>
                <div className="flex mx-auto my-auto">
                  <Button
                    size="small"
                    fullwidth="true"
                    className="shadow-md"
                    sx={{
                      backgroundColor: "#424242",
                      opacity: "75%",
                      color: "#ffffff",
                      maxHeight: "30pt",
                    }}
                  >
                    <div className="p-2 text-gray-light">
                      Search
                      <SearchIcon />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div>
          <div
            style={{ color: "#da4540", font: "bold", marginTop: "1%" }}
            className="text-2xl font-bold font-sans flex align-center justify-center p-2 w-full"
          >
            High Sites
          </div>
          <div>
            {ButtonOn == "Check_sheets" ? (
              <div>
                <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                <JobDetailsSmall />
                <SelectedSheet />
              </div>
            ) : null}
            {ButtonOn == "Search" ? (
              <div>
                <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                <SearchBarSmall />
                <SearchResults />
              </div>
            ) : null}
            {ButtonOn == "Preventative" ? (
              <div>
                <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                <JobDetailsSmall />
                <PreventativeSheet />
              </div>
            ) : null}
          </div>
          <PopoverSaved />
          <PopoverNotes />
          <PopoverSubmitted />
          <PopoverCamera />
        </div>
      ) : (
        <div>
          <div
            style={{ color: "#da4540", marginTop: "1pt", font: "bold" }}
            className="text-2xl font-bold font-sans flex align-center justify-center p-2 w-full"
          >
            High Sites
          </div>
          <div>
            {ButtonOn == "Check_sheets" ? (
              <div>
                <div className="inline-flex">
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <JobDetails />
                </div>
                <SelectedSheet />
              </div>
            ) : null}
            {ButtonOn == "Search" ? (
              <div>
                <div className="inline-flex">
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <SearchBar />
                </div>
                <SearchResults />
              </div>
            ) : null}
            {ButtonOn == "Preventative" ? (
              <div>
                <div className="inline-flex">
                  <Buttons handleAdd={handleAdd} handleSearch={handleSearch} />
                  <JobDetails />
                </div>
                <PreventativeSheet />
              </div>
            ) : null}
          </div>
          <PopoverSaved />
          <PopoverNotes />
          <PopoverSubmitted />
          <PopoverCamera />
        </div>
      )}
    </div>
  );
};
