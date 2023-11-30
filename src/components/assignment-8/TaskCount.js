import React from "react";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskCount() {
  let [tasks] = useContext(TaskContext);
  return (
    <div>
      <p className="lead fs-1 text-center bg-info text-white">Tasks count</p>
      <p className="lead fs-1 text-center mt-5 ">{tasks.length}</p>
    </div>
  );
}

export default TaskCount;