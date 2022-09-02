import Wrapper from "../assets/css_structures/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/Links";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { id, path, text, icon } = link;

              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  onClick={toggle}
                >
                  <span className="icon">{icon}</span> {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
