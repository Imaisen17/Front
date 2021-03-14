const _TASKS_API_BASE_URL = "http://localhost:8080/api/tasks";

export const getTasks = async () => {
  const res = await fetch(`${_TASKS_API_BASE_URL}`);
  return await res.json();
};

export const getTask = async (id) => {
  const res = await fetch(`${_TASKS_API_BASE_URL}/${id}`);
  return await res.json();
};

export const saveTask = async (task) => {
  console.log(task)
  const res = await fetch(`${_TASKS_API_BASE_URL}`, {
    method: task.id ? "PUT" : "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${_TASKS_API_BASE_URL}/${id}`, { method: "DELETE" });
  return await res.json();
};
