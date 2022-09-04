import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobTypeOptions: ["interview", "declined", "pending"],
  jobType: "full-time",
  status: "pending",
  isEditing: false,
  editJob: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
});

export default jobSlice.reducer;
