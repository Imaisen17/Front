import React, { useState } from "react";
import "./taskForm.css";
const TaskForm = ({ change }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
      console.log(input)
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    change({
      id: 12,
      name: "sadasd",
      hours: 4,
      dateStart: 1615496400000,
      dateEnd: 1615496400000,
      status: {
        id: 22,
        statusCode: "INPR",
        name: "In progress",
      },
      project: {
        id: 32,
        name: "Qulix project",
        shortName: "QP",
        description: "Some info",
        tasks: null,
      },
      employees: null,
    });
  };

  return (
    <div className="form">
      <input
        placeholder="Add a todo"
        value={input}
        name="text"
        className="form__input"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="form__button">
        Add task
      </button>
    </div>
  );
};

export default TaskForm;
