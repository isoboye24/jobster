import { useEffect } from "react";
import Wrapper from "../assets/css_structures/JobsContainer";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();
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
      <h5>Jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
