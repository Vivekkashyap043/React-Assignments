import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

function TaskList() {
  let [tasks] = useContext(TaskContext);
  return (
    <div>
         <p className="lead fs-1 text-center bg-info text-white">List of Tasks</p>
            {
                tasks.map((taskObj,index)=><p className='lead' key={index}>{taskObj.newTask}</p>)
            }
    </div>
  )
}

export default TaskList