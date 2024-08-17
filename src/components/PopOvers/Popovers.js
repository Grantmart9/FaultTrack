import React, { useRef } from "react";
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
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };
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
            <>
              <Webcam
                ref={webcamRef}
                audio={true}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
              />
              <div className="grid grid-rows-2 gap-1 mt-1 mb-1">
                <Button sx={SaveButtonStyle} onClick={capturePhoto}>Capture</Button>
                <Button sx={SaveButtonStyle} onClick={() => setUrl(null)}>Refresh</Button>
              </div>
              {url && (
                <div>
                  <img src={url} alt="Screenshot" />
                </div>
              )}
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
