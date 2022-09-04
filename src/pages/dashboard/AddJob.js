import { toast } from "react-toastify";
import Wrapper from "../../assets/css_structures/DashboardFormPage";
import { FormRow } from "./../../components";
import { useDispatch, useSelector } from "react-redux";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    statusOptions,
    jobType,
    status,
    isEditing,
    editJob,
  } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !position || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isLoading ? "Edit job" : "Add job"}</h3>
        <div className="form-center">
          {/* position field */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company field */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* Job Location field */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("Values cleared")}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
