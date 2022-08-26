import { Link } from "react-router-dom";
import Wrapper from "../assets/css_structures/ErrorPage";
import img from "./../assets/images/not-found.svg";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not found" />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find the page you are looking for.</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
