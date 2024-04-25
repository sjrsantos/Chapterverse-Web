import PageContainer from "../../components/PageContainer";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/images/devSquad.png";

export default function AboutUsPage() {
  return (
    <>
      <PageContainer title="About Us" className="about-us-page">
        <article>
          <Outlet />
        </article>

        {/* Side Menu */}
        <aside>
          <NavLink to="/about-us" end>
            About Us
          </NavLink>
          <NavLink to={"/about-us/mission"}>Our Mission</NavLink>
          <NavLink to={"/about-us/privacy"}>Privacy Policy</NavLink>
        </aside>

        {/* Logo */}
        <div className="about-us-logo">
          <img src={Logo} alt="DevSquad Logo" />
        </div>
      </PageContainer>
    </>
  );
}
