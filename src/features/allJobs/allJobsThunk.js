import customFetch from "../../utils/axios";

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, sort, search, searchType, searchStatus } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error");
  }
};
