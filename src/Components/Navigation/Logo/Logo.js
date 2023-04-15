import React from "react";
import Tilt from "react-tilting";
import "./Logo.css";
import pic from "./pic.jpg";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "35px" }} alt="logo" src={pic}></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
