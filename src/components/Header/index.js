import { appName } from "./../../includes/variables";
import { FaBookReader } from "react-icons/fa";
import "./styles.scss";
import MainMenu from "./../MainMenu";

export default function Header() {
  return (
    <>
      <header className="main">
        <FaBookReader />
        <div>{appName}</div>
      </header>
      <MainMenu />
    </>
  );
}
