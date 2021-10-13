import React from "react";
import { useLocation, useParams } from "react-router";

const Topic = () => {
  const { topicId } = useParams();
  const { search } = useLocation();
  const name = new URLSearchParams(search);
  return (
    <>
      <div className="text smaller "> Your Topic Id : {topicId}</div>;
      <div className="text smaller ">Search Params : {name.get("name")}</div>
    </>
  );
};

export default Topic;
