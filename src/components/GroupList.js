import React from 'react'

import GroupItem from './GroupItem'

function GroupList({ groups, tasks, handleGroupClick }) {
  // Obtain groupNames for GroupList
  const groupNames = Object.getOwnPropertyNames(groups);

  return (
    <div
      className="group-list"
    >
      <h1>
        Things To Do
      </h1> 
      {groupNames.map(function(groupItem, i) {
        return (
          <GroupItem 
            key={i}
            groupItem={groupItem}
            groups={groups}
            tasks={tasks}
            handleGroupClick={handleGroupClick}
          />
        );
      })}
    </div>
  );
}

export default GroupList;