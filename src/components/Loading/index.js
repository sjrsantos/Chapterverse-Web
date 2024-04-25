import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./styles.scss";

export default function loading() {
  return (
    <div className="loading-component">
      <h2>Loading...</h2>
      <AiOutlineLoading3Quarters className="loading-icon" />
    </div>
  );
}
