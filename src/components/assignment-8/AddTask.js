import { useForm } from "react-hook-form";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";


function AddTask() {

  let [tasks, setTasks] = useContext(TaskContext);

  let { register, handleSubmit } = useForm();

  function handleFormSubmit(taskObj){
     setTasks([...tasks,taskObj])
  }

  return (
    <div>
      <p className="lead fs-1 text-center bg-info text-white">Add a Task</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          {...register("newTask")}
          id=""
          className="form-control mb-4"
          placeholder="Enter the task...."
        />
        <button
          type="submit"
          className="btn btn-success d-block mx-auto text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;