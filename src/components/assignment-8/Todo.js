import React from 'react'
import AddTask from './AddTask';
import TaskCount from './TaskCount';
import TaskList from './TaskList';

function Todo() {
    return (
      <div>
        <h1 className="text-center display-1 text-dark mb-5 mt-3">To-Do List App by using context</h1>
        <div className="row">
          <div className="col-sm-4 border p-4">
            <AddTask />
          </div>
          <div className="col-sm-4  border p-4">
            <TaskList  />
          </div>
          <div className="col-sm-4  border p-4">
            <TaskCount />
          </div>
        </div>
      </div>
    );
}

export default Todo
