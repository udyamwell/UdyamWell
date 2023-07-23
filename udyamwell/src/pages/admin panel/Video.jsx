// export default Video;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Video = () => {
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!description) errors.description = "Description is required";
    if (!category) errors.category = "Category is required";
    if (!link) errors.link = "Link is required";
    if (!image) errors.image = "Thumbnail Image is required"; // Check if image is not selected
    if (!video) errors.video = "Video is required";

    // setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [link, setLink] = useState("");
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  // create video function
  const handleCreate = async () => {
        // Validate form fields
        if (!validateForm()) {
          return;
        }

    let lectureData = {
      name,
      description,
      category,
      isPaid,
      link
    };

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("video", video);
      Object.entries(lectureData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post("http://localhost:9000/courses/lecture-data", formData);
      console.log("Upload response:", res.data);

      if (res.status === 201) {
        navigate('/');
      }

    } catch (err) {
      console.error('Error: Unable to send data to backend===> ', err);
    }
  };

  return (
    <div style={{ width: "90%", margin: "8rem auto" }}>
      <Stack alignItems={"end"}>
        <Button
          sx={{ width: 100, margin: "1rem 0" }}
          onClick={handleOpen}
          variant="contained"
        >
          Create
        </Button>
      </Stack>
      <Paper elevation={4}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Name</TableCell>
                <TableCell align={"center"}>Description</TableCell>
                <TableCell align={"center"}>Category</TableCell>
                <TableCell align={"center"}>isPaid</TableCell>
                <TableCell align={"center"}>Link</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {

              }
            {/* </TableBody> */}
          </Table>
        </TableContainer>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Stack spacing={2}>
            <Box>
              <label>Name: </label>
              <TextField
                fullWidth
                value={name}
                name="name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>

            <Box>
              <label>Thumbnail Image: </label>
              <TextField
                type="file"
                fullWidth
                name="image"
                variant="standard"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Box>

            <Box>
              <label>Upload Video: </label>
              <TextField
                type="file"
                fullWidth
                name="video"
                variant="standard"
                onChange={(e) => setVideo(e.target.files[0])}
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
              <label>Category: </label>
              <TextField
                fullWidth
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="standard"
              />
            </Box>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is it Paid?</InputLabel>
                <Select name="isPaid" value={isPaid} label="Is it Paid?" onChange={(e) => setIsPaid(e.target.value)}>
                  <MenuItem value={"true"}>True</MenuItem>
                  <MenuItem value={"false"}>False</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <label>Link: </label>
              <TextField
                fullWidth
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                variant="standard"
              />
            </Box>
            <Button onClick={handleCreate} variant="contained">Create</Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};

export default Video;

