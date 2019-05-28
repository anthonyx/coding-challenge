export function getGroupObject(tasks) {
  // groupObject is an object with properties equal to the group name.
  // Each group name property will point to an array with the task ids
  var groupObject = {};

  for (var i = 0; i < tasks.length; i++) {
    var groupName = tasks[i].group;
    // If groupName property exists in groupObject, push task id onto tasks array
    if(groupObject[groupName]) {
      groupObject[groupName].push(tasks[i].id); 
    } else {
      groupObject[groupName] = [];
      groupObject[groupName].push(tasks[i].id);
    }
  }

  return groupObject;
}

export function getTaskByIdentifier(key, tasks, identifier) {
  return tasks.find(function(task) {
    return task[identifier] === key;
  })
}

export function checkDependenciesCompleted(taskName, tasks) {
  const task = getTaskByIdentifier(taskName, tasks, 'task');
  let allDependenciesCompleted = false;

  if (task.dependencyIds.length === 0) {
    allDependenciesCompleted = true;
  } else {
    allDependenciesCompleted = task.dependencyIds.every(function(id) {
      const task = getTaskByIdentifier(id, tasks, 'id');
      return task.completedAt ? true : false;
    })
  }

  return allDependenciesCompleted;
}

export function readJSON(path) {
    var xhr = new XMLHttpRequest();
    const JSONpath = 'http://localhost:3000/' + path;

    xhr.open('GET', JSONpath, false);
    xhr.send();

    if (xhr.status === 200) {
      return xhr.response;
    }
}