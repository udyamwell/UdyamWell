import {
    Box,
    Button,
    ButtonGroup,
    Modal,
    Paper,
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
//   import { deleteProduct, updateProduct } from "../slices/ProductSlice";
  import { useNavigate } from "react-router-dom";
  
  const VideoCell = ({ lecture }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(lecture?.name);
    const [image, setImage] = useState(lecture?.brand);
    const [description, setDescription] = useState(lecture?.category);
    const [category, setCategory] = useState(lecture?.price);
    const [countInStock, setStock] = useState(lecture.countInStock);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    };
    console.log("lecture",lecture);
    // const handleUpdate = () => {
    //   let data = {
    //     _id: product._id,
    //     data: {
    //       name,
    //       brand,
    //       category,
    //       price: parseInt(price),
    //       countInStock: parseInt(countInStock),
    //     },
    //   };
    //   dispatch(updateProduct(data));
    //   handleClose();
    // };
    return (
      <>
        <TableRow>
          {/* <TableCell onClick={()=>(navigate(`/Product/${product._id}`))} sx={{cursor:"pointer"}} align={"center"}>{product.name}</TableCell> */}
          <TableCell align={"center"}>{lecture?._id}</TableCell>
          <TableCell align={"center"}>{lecture?.name}</TableCell>
          <TableCell align={"center"}>
          <Box sx={{ height: "10vh" }}>
            <img
              style={{ height: "100%" }}
              src={`http://localhost:9000/uploads/course/thumbnails/${lecture?.image}`}
              alt={lecture.name}
            />
          </Box>
          </TableCell>
          <TableCell align={"center"} sx={{width:"20vw",textOverflow:"scroll"}}>{lecture?.description}</TableCell>
          <TableCell align={"center"}>{lecture?.category}</TableCell>
          <TableCell align={"center"}>{lecture?.isPaid ? "Pay" : "Free"}</TableCell>
          <TableCell align={"center"}>{lecture?.cost ? lecture?.cost : "-"}</TableCell>
          <TableCell align={"center"}>
            <ButtonGroup>
              <Button size="small" onClick={handleOpen}>
                <EditIcon />
              </Button>
              <Button
                // onClick={() => dispatch(deleteProduct(product._id))}
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
                <label>Image: </label>
                <TextField
                  fullWidth
                  type="file"
                  value={image}
                  variant="standard"
                  onChange={(e) => setImage(e.target.value)}
                />
              </Box>
              <Box>
                <label>Description: </label>
                <TextField
                  fullWidth
                  value={description}
                  variant="standard"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box>
                <label>Category: </label>
                <TextField
                  fullWidth
                  value={category}
                  variant="standard"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Box>
              <Button  variant="contained">
                UPDATE
              </Button>
            </Stack>
          </Paper>
        </Modal>
      </>
    );
  };
  
  export default VideoCell;