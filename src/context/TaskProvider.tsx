// src/context/TaskProvider.tsx
import { ReactNode, useState } from "react";
import { TaskContext } from "./TaskContext";
import { Task } from "../types";

const TaskContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const updateTask = (updatedTask: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const deleteTask = (taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const markTaskComplete = (taskId: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: true } : task
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, updateTask, deleteTask, markTaskComplete }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
