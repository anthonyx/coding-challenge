import React from 'react'
import './TaskItem.css'

import { getTaskByIdentifier, checkDependenciesCompleted } from '../assets/utilities'

import { ReactComponent as Complete } from '../assets/completed.svg';
import { ReactComponent as Incomplete } from '../assets/incomplete.svg';
import { ReactComponent as Locked } from '../assets/locked.svg';

function TaskItem({ taskName, tasks, handleTaskClick }) {
  // Check if dependencies completed for task
  const dependenciesCompleted = checkDependenciesCompleted(taskName, tasks);
  const task = getTaskByIdentifier(taskName, tasks, 'task');
  const status = !dependenciesCompleted ? 'locked' : (task.completedAt ? 'complete' : 'incomplete');

  function renderIcon() {
    if (status === 'locked') {
      return (
        <Locked />
      );
    } else if (status === 'complete') {
      return (
        <Complete />
      );
    } else {
      return (
        <Incomplete />
      );
    }
  }

  return (
    <div
      className="task-item"
      onClick={dependenciesCompleted ? handleTaskClick : null}
    >
      <div
        className={"task-icon " + status}
      >
        {renderIcon()}  
      </div>
      <div
        className={"task-name " + status}
      >
        {taskName}
      </div>
    </div>
  );
}

export default TaskItem;