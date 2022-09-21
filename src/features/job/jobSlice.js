import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { createJobThunk, editJobThunk, deleteJobThunk } from "./jobThunk";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  statusOptions: ["interview", "declined", "pending"],
  jobType: "full-time",
  status: "pending",
  isEditing: false,
  editJobId: "",
};

// Create, edit and delete jobs
export const createJob = createAsyncThunk("job/createJob", createJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    // Response fo the create job
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success(`Job created`);
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    // Response fo the delete job
    [deleteJob.fulfilled]: ({ payload }) => {
      toast.success(payload);
    },
    [deleteJob.rejected]: ({ payload }) => {
      toast.error(payload);
    },
    // Response fo the edit job
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success(`Job Modified!`);
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
