import React, { Component } from 'react'
import './App.css'

import { getGroupObject, getTaskByIdentifier, readJSON } from './assets/utilities'

import GroupList from './components/GroupList'
import TaskList from './components/TaskList'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: {},
      groups: {},
      view: null
    };

    this.handleGroupClick = this.handleGroupClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.toggleDependent = this.toggleDependent.bind(this);
  }

  handleGroupClick(group) {
    this.setState({view: group});
  }

  handleTaskClick(taskName, tasks) {
    const task = getTaskByIdentifier(taskName, tasks, 'task');
    task.completedAt = !task.completedAt;
    if (task.completedAt !== true) {
      this.toggleDependent(task, tasks)
    }
    this.setState({tasks: tasks})
  }

  // Toggles completedAt property of all tasks that depend on the task toggled
  toggleDependent(task, tasks) {
    for (let i = 0; i < tasks.length; i++) {
      let taskDependencies = tasks[i].dependencyIds;
      for (let j = 0; j < taskDependencies.length; j++) {
        if (taskDependencies[j] === task.id) {
          tasks[i].completedAt = task.completedAt;
          this.toggleDependent(tasks[i], tasks);
        }
      }
    }
  }

  componentDidMount() {
    const tasks = JSON.parse(readJSON('data.json'));
    const groupObject = getGroupObject(tasks);
    this.setState({groups: groupObject, tasks: tasks});
  }

  render() {
    const { tasks, groups, view } = this.state;
    if (view && groups[view]) {
      return (
        <TaskList 
          tasks={tasks}
          groups={groups}
          view={view}
          handleGroupClick={this.handleGroupClick}
          handleTaskClick={this.handleTaskClick}
        />
      );
    } else {
      return (
        <GroupList
          tasks={tasks}
          groups={groups}
          handleGroupClick={this.handleGroupClick}
        />
      );
    }
  }
}
