import { useEffect } from "react";
import Wrapper from "../assets/css_structures/JobsContainer";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    sort,
    search,
    searchType,
    searchStatus,
  } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, sort, search, searchType, searchStatus]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No job to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
