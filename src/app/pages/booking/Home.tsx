import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  return (
    <div className="container-fluid p-5 text-center">
      <h1>Home Page {JSON.stringify(state)}</h1>
    </div>
  );
};
export default Home;
