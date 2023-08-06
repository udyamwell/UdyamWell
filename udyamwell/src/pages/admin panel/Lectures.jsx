// export default Video;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {
  Alert,
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
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import VideoCell from "../../components/VideoCell";
import { createVideo, fetchSingleCource } from "../../slices/videos";
import LectureCell from "../../components/LectureCell";

const Lectures = ({}) => {
  const {id}= useParams();
  // const navigate = useNavigate();
  const {course,lectures,error} = useSelector(state=>state.lectures);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSingleCource(id));
  },[])
  
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
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
  const validateForm = () => {
    console.log("Dsda");
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!description) errors.description = "Description is required";
    if (!image) errors.image = "Thumbnail Image is required"; // Check if image is not selected
    if (!video) errors.video = "Video is required";

    // setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // create video function
  const handleCreate = async () => {
        // Validate form fields
        console.log("funcions enter");
        if (!validateForm()) {
          return;
        }
      const formData = new FormData();
      formData.append("videoThumbnail", image);
      formData.append("videoName",name);
      formData.append("description",description);
      formData.append("video",video);
      dispatch(createVideo({id:id,data:formData}));
  };

  return (
    <div style={{ width: "90%", margin: "8rem auto" }}>
        <Typography textAlign={'center'} variant="h3">{course?.course}</Typography>
        <Typography textAlign={'center'} sx={{mt:2}} variant="body1">{course?.description}</Typography>
      <Stack alignItems={"end"}>
        {/* {error && <Alert severity="error">{error}</Alert>} */}
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
                <TableCell align={"center"}>VideoImage</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {
                lectures?.map((lecture,index)=>(
                  <LectureCell key={index} lecture={lecture}/>
                ))
              }
            </TableBody> 
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
            <Button onClick={handleCreate} variant="contained">Create</Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};

export default Lectures;

