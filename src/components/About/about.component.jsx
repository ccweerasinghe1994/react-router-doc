import React from "react";

const AboutPage = (props) => {
  console.log(props.match);
  return (
    <div
      style={{
        marginTop: "50px",
      }}
      className="text smaller "
    >
      About Page
    </div>
  );
};

export default AboutPage;

