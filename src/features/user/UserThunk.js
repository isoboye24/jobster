import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { logoutUser } from "./userSlice";
import { clearValues } from "./../job/jobSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch("/auth/updateUser", user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(logoutUser(message));
    Promise.resolve();
  } catch (error) {
    Promise.reject();
  }
};
