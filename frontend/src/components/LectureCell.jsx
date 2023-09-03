import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse, updateCourse } from "../slices/CourseSlice";
import { deleteVideo, updateVideo } from "../slices/videos";

const LectureCell = ({ lecture }) => {
  const [name, setName] = useState(lecture?.videoName);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(lecture?.description);
  const [video, setVideo] = useState(null);
  const dispatch = useDispatch();
  // const [isPaid, setIsPaid] = useState(false);
  // const [cost, setCost] = useState(0);
  // const [name, setName] = useState(lecture?.name);
  // const [description, setDescription] = useState(lecture?.category);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  //update
  const handleUpdate = () => {
    if (image === null || video === null) {
      alert("video and thumbnail are required!");
      return;
    }
    let data = {
      _id: lecture._id,
      data: {
        videoName: name,
        description,
        videoThumbnail:image,
        video,
      },
    };
    dispatch(updateVideo(data));
    handleClose();  };
  //delete

  return (
    <>
      <TableRow>
        <TableCell align={"center"}>{lecture?.videoName}</TableCell>
        <TableCell align={"center"}>{lecture?.description}</TableCell>
        <TableCell align={"center"}>
          <Box sx={{ height: "10vh" }}>
            <img
              style={{ height: "100%" }}
              src={`https://udyamwell.azurewebsites.net/uploads/course/videoThumbnails/${lecture?.videoThumbnail}`}
              alt={lecture.videoThumbnail}
            />
          </Box>
        </TableCell>
        <TableCell align={"center"}>
          <ButtonGroup>
            <Button size="small" onClick={handleOpen}>
              <EditIcon />
            </Button>
            <Button
              onClick={() => dispatch(deleteVideo(lecture._id))}
              size="small"
            >
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Stack spacing={2}>
            <Box>
              <label>Video Name: </label>
              <TextField
                fullWidth
                value={name}
                name="name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box>
              <label>Video Image: </label>
              <TextField
                type="file"
                fullWidth
                name="image"
                variant="standard"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Box>
            <Box>
              <label>Description: </label>
              <TextField
                fullWidth
                multiline
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Video: </label>
              <TextField
                type="file"
                fullWidth
                name="image"
                variant="standard"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </Box>
            <Button onClick={handleUpdate} variant="contained">
              Create
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};

export default LectureCell;
