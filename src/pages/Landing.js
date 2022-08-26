import main from "./../assets/images/main.svg";
import Wrapper from "../assets/css_structures/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            dolore aliquid cumque itaque eos iusto corporis, expedita minus
            tempora deleniti eligendi blanditiis sequi nam corrupti libero in
            repudiandae non eveniet.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
