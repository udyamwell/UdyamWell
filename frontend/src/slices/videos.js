import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  courseName: null,
  description: "",
  image: "",
  lectures: null,
  error: false,
};

export const fetchSingleCource = createAsyncThunk(
  "videos/fetchSingleCourses",
  (id) => {
    console.log("id in slice", id);
    return axios
      .get(`https://www.udyamwell.com/api/v1/courses/videos/fetch-video/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
);
export const createVideo = createAsyncThunk(
  "videos/createVideo",
  ({ id, data }) => {
    return axios
      .post(
        `https://www.udyamwell.com/api/v1/courses/videos/create-video/${id}`,
        data
      )
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
);

export const updateVideo = createAsyncThunk(
  "videos/updateVideo",
  ({ _id, data }) => {
    console.log("slice", _id, data);
    return axios
      .put(
        `https://www.udyamwell.com/api/v1/courses/videos/update-video/${_id}`,
        data
      )
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
);
export const deleteVideo = createAsyncThunk("videos/deleteVideo", (_id) => {
  console.log("slice", _id);
  return axios
    .delete(
      `https://www.udyamwell.com/api/v1/courses/videos/delete-video/${_id}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
});

const lectureSlice = createSlice({
  name: "lectures",
  initialState,
  extraReducers: {
    [fetchSingleCource.pending]: (state) => {
      state.course = null;
    },
    [fetchSingleCource.fulfilled]: (state, action) => {
      state.courseName = action.payload.course;
      state.lectures = action.payload.videos;
      state.image = action.payload.image;
      state.description = action.payload.description;
      state.error = false;
    },
    [fetchSingleCource.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [createVideo.fulfilled]: (state, action) => {
      state.lectures.push(action.payload.data);
      state.error = false;
    },
    [createVideo.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [updateVideo.pending]: (state) => {
      console.log("worked");
    },
    [updateVideo.fulfilled]: (state, action) => {
      let { _id } = action.payload;
      console.log("id", _id);
      let index = state.lectures.findIndex((course) => course._id === _id);
      state.loading = false;
      state.lectures[index] = action.payload;
    },
    [updateVideo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteVideo.fulfilled]: (state, action) => {
      state.loading = false;
      const { _id } = action.payload;
      let index = state.lectures.findIndex((course) => course._id === _id);
      state.lectures.splice(index, 1);
    },
    [deleteVideo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
export default lectureSlice.reducer;
