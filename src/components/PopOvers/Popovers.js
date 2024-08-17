import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  SaveButtonStyle,
  PopoverStyle,
  videoConstraints,
} from "components/Display/feutures";
import Webcam from "react-webcam";
import Button from "@mui/material/Button";
const WebcamComponent = () => <Webcam />;

export const PopoverSaved = ({ Saved, handleClose }) => {
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

export const PopoverSubmitted = ({ Submitted, handleClose }) => {
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

export const PopoverCamera = ({ Camera, handleClose }) => {
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
