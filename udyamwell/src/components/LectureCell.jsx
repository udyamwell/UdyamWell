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
  
  const LectureCell = ({ lecture }) => {
    console.log("lecture",lecture)
    // const dispatch = useDispatch();
    // const [isPaid, setIsPaid] = useState(false);
    // const [cost, setCost] = useState(0);
    // const [name, setName] = useState(lecture?.name);
    // const [description, setDescription] = useState(lecture?.category);
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const navigate = useNavigate();
    // const style = {
    //   position: "absolute",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   bgcolor: "background.paper",
    //   boxShadow: 24,
    //   p: 4,
    // };
    //update
    // const handleUpdate = () => {
    //   let data = {
    //     _id: lecture._id,
    //     data: {
    //       name,
    //       description,
    //       isPaid,
    //       cost
    //     },
    //   };
    //   dispatch(updateCourse(data));
    //   handleClose();
    // };
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
              // src={`http://localhost:9000/uploads/course/thumbnails/${lecture?.image}`}
              alt={lecture.videoName}
            />
          </Box>
          </TableCell>
          {/* <TableCell align={"center"}>
            <ButtonGroup>
              <Button size="small" onClick={handleOpen}>
                <EditIcon />
              </Button>
              <Button
                onClick={() => dispatch(deleteCourse(lecture._id))}
                size="small"
              >
                <DeleteIcon />
              </Button>
            </ButtonGroup>
          </TableCell> */}
        </TableRow>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > */}
          {/* <Paper sx={style}>
            <Stack spacing={3}>
              <Box>
                <label>Name: </label>
                <TextField
                  fullWidth
                  value={name}
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                />
              </Box> */}
              {/* <Box>
                <label>Image: </label>
                <TextField
                  fullWidth
                  type="file"
                  value={image}
                  variant="standard"
                  onChange={(e) => setImage(e.target.value)}
                />
              </Box> */}
              {/* <Box>
                <label>Description: </label>
                <TextField
                  fullWidth
                  value={description}
                  variant="standard"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box> */}
              {/* <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is it Paid?</InputLabel>
                <Select name="isPaid" value={isPaid} label="Is it Paid?" onChange={(e) => setIsPaid(e.target.value)}>
                  <MenuItem value={"true"}>True</MenuItem>
                  <MenuItem value={"false"}>False</MenuItem>
                </Select>
              </FormControl> */}
            {/* </Box>
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
           )} */}
              {/* <Button  variant="contained" onClick={handleUpdate}>
                UPDATE
              </Button>
            </Stack>
          </Paper>
        </Modal> */}
      </>
    );
  };
  
  export default LectureCell;