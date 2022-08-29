import { useState, useEffect } from "react";
import Wrapper from "../assets/css_structures/RegisterPage";
import { Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDafault();

    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  );
}

export default Register;
