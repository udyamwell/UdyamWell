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
import React, { useState } from "react";
import axios  from "axios";
import { useNavigate } from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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
    let lectureData = {
      name,
      image,
      description,
      category,
      isPaid,
      link
    }
    // console.log("dataaa",lectureData);

    try{
    let res =  await  axios.post(`http://localhost:9000/courses/lecture-data`,lectureData);
     if(res.status === 201 ){
      navigate('/');
     }

    }catch(err){
      return console.log('Error: Unable to send data to backend',err);

    }

    // axios
    // .post(`http://localhost:9000/users/sign-in`,values)
    // .then((res) => {
    //   if(res.status === 200){
    //     navigate('/');
    //   }
    //   console.log("response", res);
    // })
    // .catch((err) => {
    //   console.log("eer", err);
    // });



  }
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
          <Stack spacing={3}>
            <Box>
              <label>Name: </label>
              <TextField
                fullWidth
                value={name}
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box>
              <label>Thumbnail Image: </label>
              <TextField
                type="file"
                fullWidth
                value={image}
                variant="standard"
                onChange={(e) =>setImage(e.target.value)}
              />
            </Box>
            <Box>
              <label>Description: </label>
              <TextField
                fullWidth
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Category: </label>
              <TextField
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="standard"
              />
            </Box>
            <Box>
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Is it Paid?</InputLabel>
              <Select name="isPaid" value={isPaid} label="Is it Paid?" onChange={(e)=>setIsPaid(e.target.value)}>
                <MenuItem value={"true"}>True</MenuItem>
                <MenuItem value={"false"}>False</MenuItem>
              </Select>
              </FormControl>
            </Box>
            <Box>
              <label>Link: </label>
              <TextField
                fullWidth
                value={link}
                onChange={(e)=>setLink(e.target.value)}
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
