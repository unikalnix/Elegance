import React from "react";
import "./Title.css";

const Title = ({ title, description }) => {
  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default Title;
