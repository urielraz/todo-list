import useTitle from "../../../Services/useTitle";
import AddTasks from "../../Dashboard/AddTasks/AddTasks";
import Tasks from "../../Dashboard/Tasks/Tasks";

function Todo() {
  useTitle("Todo List");

  return (
    <div className="Todo">
      {/* Lists */}
      <Tasks />

      {/* Events */}
      <AddTasks />
    </div>
  );
}
export default Todo;
