import { useState } from "react";
import { Header } from "./Header";
import { Task } from "./Task";

export const Form = () => {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Je souhaite recommencer le projet avec Belivemy", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // ➕ Ajouter une nouvelle tâche
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), content: newTask.trim(), done: false },
    ]);
    setNewTask("");
  };

  // ✅ Basculer l'état done
  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // 🗑️ Supprimer
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <Header />
      <div className="add">
        <form onSubmit={handleAdd} className="flex gap-2 my-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Que souhaitez-vous ajouter ?"
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded"
          >
            Ajouter
          </button>
        </form>
      </div>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => toggleDone(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </>
  );
};
