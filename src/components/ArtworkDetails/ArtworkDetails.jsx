import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ArtworkDetails({ artwork, handleBookmark }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {artwork.title}
          </Typography>
          <img
            height="350"
            width="300"
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
            alt={artwork.title}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {artwork?.exhibition_history?.slice(0, 300)}
          </Typography>
          <Typography variant="h7" component="h4">
            Department: {artwork.department_title}
          </Typography>
          <Typography variant="h5" component="h3">
            Author: {artwork?.artist_title || "Author unknown"}
          </Typography>
          {
            <Box>
              <Button size="large" onClick={handleClose}>
                Close
              </Button>
              <Button size="large" onClick={handleBookmark}>
                BookMark
              </Button>
            </Box>
          }
        </Box>
      </Modal>
    </div>
  );
}
export default ArtworkDetails;
