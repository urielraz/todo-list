import Welcome from "../../Dashboard/Welcome/Welcome";
import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import { useEffect } from "react";
import useTitle from "../../../Services/useTitle";

function Home() {
  useTitle("Home");
  return (
    <div className="Home">
      {/* Interpolation */}
      <Welcome />

      {/* Conditional Rendering */}
      <TaskCounter />
    </div>
  );
}
export default Home;
