import { React, useState } from "react";
import Task from "./components/Task.component";
import "./App.css";

export default function App() {
  let [tasks, toggleCompleted] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.name}
            onClick={() =>
              toggleCompleted(
                (tasks = tasks.map((taskFromMap) => {
                  if (taskFromMap.name === task.name) {
                    return { name: taskFromMap.name, completed: !taskFromMap.completed };
                  }
                  return taskFromMap;
                }))
              )
            }
          />
        );
      })}
    </div>
  );
}
