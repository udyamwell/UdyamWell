import React, { useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { deleteUser, fetchAllUsers, updateUserAdmin } from "../../slices/UserSlice";
import Switch from '@mui/material/Switch';

const Users = () => {
  const { user, users } = useSelector((state) => state.user);
  // console.log("usssss",users)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    !user && navigate("/");
    !user?.isAdmin ? navigate("/") : dispatch(fetchAllUsers());
  }, []);
  const handleChange = (e,users) => {
   if(users._id === user._id) {
    alert("your cannot change your role");
    return;
  }
  console.log("T/F",user.isAdmin)
    const check = window.confirm(`Are you sure that you want to ${users.name} ${users.isAdmin ? "remove" : "make"} as an admin?`)
     check && dispatch(updateUserAdmin({_id:users._id,data:{isAdmin:e.target.checked}}))
  }
  const handleDelete = (users) => {
    if(users._id === user._id){
      alert("You cannot delete youself");
      return;
    }
    const check = window.confirm(`Are you sure that you want to delete ${users.name} as a user?`)
   check && dispatch(deleteUser(users._id));
  }
  return (
    <Paper sx={{width:"90%",margin:"10rem auto"}} elevation={4}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:"bold"}} align={"center"}>Name</TableCell>
              <TableCell sx={{fontWeight:"bold"}} align={"center"}>Email</TableCell>
              <TableCell sx={{fontWeight:"bold"}} align={"center"}>Enterprise Name</TableCell>
              <TableCell sx={{fontWeight:"bold"}} align={"center"}>Admin</TableCell>
              <TableCell sx={{fontWeight:"bold"}} align={"center"}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user,index) => (
              <TableRow key={index}>
                <TableCell align={"center"}>{user.name}</TableCell>
                <TableCell align={"center"}>{user.email}</TableCell>
                <TableCell align={"center"}>{user.eName}</TableCell>
                <TableCell align={"center"}>
                  {user.isAdmin ? <CheckIcon sx={{color:"green"}} /> : <CloseIcon sx={{color:"red"}}/>}
                  <Switch color="green" checked={user.isAdmin} onClick={(e)=>handleChange(e,user)} />
                </TableCell>
                <TableCell align={"center"}>
                  <DeleteIcon onClick={()=>handleDelete(user)} sx={{cursor:"pointer"}}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;
