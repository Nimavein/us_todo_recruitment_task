import { useGlobalContext } from "./context";
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import axios from "axios";
import Task from "./Task";

const TodoEditForm = ({ id, handleEditVisibility, name, task }) => {
  const [todoEditData, setTodoEditData] = useState();
  const { setTodoList, jwt, todoList } = useGlobalContext();
  const [taskData, setTaskData] = useState({});
  const [allTasksToAddData, setAllTasksToAddData] = useState([]);
  const [todoName] = useState(name);

  const handleFormChange = (e) => {
    setTodoEditData({
      ...todoEditData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    console.log(todoName);
    let allTodos = [...todoList];
    const todoTasks = allTodos.find((x) => x.id === id).task;
    console.log(todoTasks);
    // Request API.
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    const bodyParameters = {
      name: todoName,
      ...(typeof todoEditData !== "undefined" && {
        name: todoEditData.name,
      }),
      task: [...allTasksToAddData, ...todoTasks],
    };
    axios
      .put(
        `https://recruitment.ultimate.systems/to-do-lists/${id}`,
        bodyParameters,
        config
      )
      .then((response) => {
        axios
          .get("https://recruitment.ultimate.systems/to-do-lists", {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          })
          .then((response) => {
            setTodoList(response.data);
          });
        handleEditVisibility();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>edit todo form</h2>
      <form onSubmit={(e) => handleEditTodo(e, todoEditData)}>
        <div>
          <input
            onChange={handleFormChange}
            placeholder="name"
            type="text"
            id="name"
          />
        </div>

        {task &&
          task.map((singleTask) => {
            return (
              <Task
                key={singleTask.name}
                {...singleTask}
                todoId={id}
                todoName={name}
                todoTasks={task}
                isTaskAdded={true}
              />
            );
          })}

        <div className="login-form-buttons">
          <button>edit</button>
        </div>
      </form>
      <TaskForm
        handleFormChange={handleFormChange}
        taskData={taskData}
        setTaskData={setTaskData}
        allTasksToAddData={allTasksToAddData}
        setAllTasksToAddData={setAllTasksToAddData}
      />
    </div>
  );
};

export default TodoEditForm;
