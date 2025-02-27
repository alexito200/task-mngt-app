import { ReactNode, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { Task } from "../types";

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    // ✅ Load tasks from localStorage only once on first render
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // ✅ Save tasks to localStorage whenever tasks change
    useEffect(() => {
        if (tasks.length > 0) { // Prevents saving empty lists unintentionally
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = (task: Task) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
    };

    const updateTask = (updatedTask: Task) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Persist deletion
    };

    // ✅ Fix: Toggle "Completed" state & Save to Local Storage
    const markTaskComplete = (taskId: string) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // ✅ Ensure completed state is stored
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, updateTask, deleteTask, markTaskComplete }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
