import React from "react";
import { ReactComponent as Spinner } from "../../assets/images/spinner.svg";
// import SpinnerLogo from "../../assets/images/spinner.svg";
const Loading = () => {
  return (
    <div className="spinner-wrapper">
      {/* <img src={SpinnerLogo} alt="spinner logo" /> */}
      <Spinner />
    </div>
  );
};

export default Loading;