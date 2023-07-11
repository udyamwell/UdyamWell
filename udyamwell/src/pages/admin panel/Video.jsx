import { Box, Button, Modal, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";

const Video = () => {
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
    return (
        <div style={{width:"90%",margin:"8rem auto"}}>
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
                <TableCell align={"center"}>TagS</TableCell>
                <TableCell align={"center"}>Paid</TableCell>
                <TableCell align={"center"}>Link</TableCell>
                {/* <TableCell align={"center"}>CountInStock</TableCell> */}
                <TableCell align={"center"}>Actions</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {all_products?.map((product) => (
                <Cell key={product._id} product={product} />
              ))} */}
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
                // value={name}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Image: </label>
              <TextField
                fullWidth
                // value={image}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Brand: </label>
              <TextField
                fullWidth
                // value={brand}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Category: </label>
              <TextField
                fullWidth
                // value={category}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Description: </label>
              <TextField
                // inputProps={{ type: "textarea" }}
                // sx={{ overflowY: "scroll" }}
                fullWidth
                multiline
                // value={description}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Price: </label>
              <TextField
                fullWidth
                // value={price}
                variant="standard"
              />
            </Box>
            <Box>
              <label>Count in stock: </label>
              <TextField
                fullWidth
                // value={countInStock}
                variant="standard"
              />
            </Box>
            <Button variant="contained">
              Create
            </Button>
          </Stack>
        </Paper>
      </Modal>
        </div>
    );
}

export default Video;