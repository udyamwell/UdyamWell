// export default Video;
import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
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
import { createCourse, fetchAllCources } from "../../slices/CourseSlice";
import VideoCell from "../../components/VideoCell";

const Video = () => {  
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllCources());
  },[])
  
  const {all_courses,error} = useSelector(state=>state.courses);

  const coursesArray = all_courses?.courses || [];

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  // const [video, setVideo] = useState(null);--------------------
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [cost, setCost] = useState(0);
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
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!description) errors.description = "Description is required";
    // if (!category) errors.category = "Category is required";
    if (!image) errors.image = "Thumbnail Image is required"; // Check if image is not selected
    // if (!video) errors.video = "Video is required";------------------------------------

    // setErrors(errors);
    return Object.keys(errors).length === 0;
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
      // category,
      isPaid,
      cost
    };

    // try {
      const formData = new FormData();
      formData.append("image", image);
      // formData.append("video", video);--------------------------
      Object.entries(lectureData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // const res = await axios.post("http://localhost:9000/courses/lecture-data", formData);
      // console.log("Upload response:", res.data);
      dispatch(createCourse(formData));


      // if (res.status === 201) {
      //   navigate('/');
      // }

    // } catch (err) {
    //   console.error('Error: Unable to send data to backend===> ', err);
    // }
  };

  return (
    <div style={{ width: "90%", margin: "8rem auto" }}>
      <Stack alignItems={"end"}>
        {error && <Alert severity="error">{error}</Alert>}
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
              <TableCell align={"center"}>Id</TableCell>
                <TableCell align={"center"}>Name</TableCell>
                <TableCell align={"center"}>Thumbnail</TableCell>
                <TableCell align={"center"}>Description</TableCell>
                {/* <TableCell align={"center"}>Category</TableCell> */}
                <TableCell align={"center"}>isPaid</TableCell>
                <TableCell align={"center"}>Cost(Rs)</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                coursesArray?.map((lecture,index)=>(
                  <VideoCell key={index} lecture={lecture}/>
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

            {/* <Box> ---------------------------------
              <label>Upload Video: </label>
              <TextField
                type="file"
                fullWidth
                name="video"
                variant="standard"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </Box> */}

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
            {/* <Box>
              <label>Category: </label>
              <TextField
                fullWidth
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="standard"
              />
            </Box> */}
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is it Paid?</InputLabel>
                <Select name="isPaid" value={isPaid} label="Is it Paid?" onChange={(e) => setIsPaid(e.target.value)}>
                  <MenuItem value={"true"}>True</MenuItem>
                  <MenuItem value={"false"}>False</MenuItem>
                </Select>
              </FormControl>
            </Box>
           {isPaid && (
             <Box>
             <label>Cost: </label>
             <TextField
               fullWidth
               name="link"
               value={cost}
               onChange={(e) => setCost(e.target.value)}
               variant="standard"
             />
           </Box>
           )}
            <Button onClick={handleCreate} variant="contained">Create</Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};

export default Video;

