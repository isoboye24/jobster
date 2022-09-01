import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import Wrapper from "./../../assets/css_structures/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar />
          <div className="dashbaord-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
