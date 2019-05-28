import React from 'react'
import './GroupItem.css'

import { getTaskByIdentifier } from '../assets/utilities'

import { ReactComponent as Group } from '../assets/group.svg';

function GroupItem({ groupItem, groups, tasks, handleGroupClick }) {
  const totalNumberOfTasks = groups[groupItem].length;
  const tasksCompleted = groups[groupItem].filter(function(id) {
    let task = getTaskByIdentifier(id, tasks, 'id');
    return task.completedAt;
  }).length;

  return (
    <div
      className="group"
      onClick={() => handleGroupClick(groupItem)}
    >
      <div
        className="group-icon"
      >
        <Group />
      </div>
      <div
        className="group-text"
      >
        <div
          className="group-item"
        >
          {groupItem}
        </div>
        <div 
          className="group-completed"
        >
          {tasksCompleted} OF {totalNumberOfTasks} TASKS COMPLETE
        </div>
      </div>
    </div>
  );
}

export default GroupItem;