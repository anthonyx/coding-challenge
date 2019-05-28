import React from 'react'
import './TaskList.css'

import { getTaskByIdentifier } from '../assets/utilities'

import TaskItem from './TaskItem'

function TaskList({ tasks, groups, view, handleGroupClick, handleTaskClick }) {
  // Obtain taskNames for TaskList
  const taskNames = [];
  groups[view].forEach(function(id) {
    let task = getTaskByIdentifier(id, tasks, 'id');
    taskNames.push(task.task);
  })

  return (
    <div
      className="task-list"
    >
      <div
        className="task-list-header"
      >
        <h1>
          {view}
        </h1>
        <div
          className="link"
          onClick={() => handleGroupClick(null)}
        >
          ALL GROUPS
        </div>
      </div>
      {taskNames.map(function(taskName, i) {
        return (
          <TaskItem 
            key={i}
            taskName={taskName}
            tasks={tasks}
            handleTaskClick={() => handleTaskClick(taskName, tasks)}
            
          />
        );
      })}
    </div>
  );
}

export default TaskList;