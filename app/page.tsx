"use client";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Home = () => {
  const loading = useSelector((state: any) => state.app.loading);

  return (
    <div>
      {`loading: ${loading}`}
      <Button variant="outlined">Home Page</Button>
    </div>
  );
};

export default Home;
