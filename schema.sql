CREATE DATABASE database;

DROP TABLE IF EXISTS task_list
DROP TABLE IF EXISTS task_dependencies

CREATE TABLE task_list (
    task_id INT NOT NULL PRIMARY KEY,
    group_name VARCHAR(255),
    task_name VARCHAR(255),
    completed_at DATE
);

CREATE TABLE task_dependencies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task_id INT FOREIGN KEY REFERENCES task_list(task_id),
  dependency_id INT FOREIGN KEY REFERENCES task_list(task_id)
)