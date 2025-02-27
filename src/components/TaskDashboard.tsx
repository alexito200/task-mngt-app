import { Link } from 'react-router-dom';
import { useTaskContext } from "../context/TaskContext";
import { Task } from '../types';
import LogoutButton from './LogoutButton';
import "../App.css";

const TaskDashboard = () => {
    const { tasks, markTaskComplete, deleteTask } = useTaskContext()!;

    return (
        <div className="card dashboardCard text-center">
            <h1 className="card-header">Task List</h1>
            
            <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                    <Link to={'/task/new'} className="btn btn-primary mx-2">
                        ➕ Add New Task
                    </Link>
                    <LogoutButton />
                </div>

                {tasks.length === 0 ? (
                    <p className="text-muted">No tasks available. Add a new task to get started.</p>
                ) : (
                    <ul className="list-group">
                        {tasks.map((task: Task) => {
                            const isCompleted = !!task.completed;

                            return (
                                <li 
                                    key={task.id} 
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    {/* Task title with dynamic strikethrough */}
                                    <Link 
                                        to={`/task/${task.id}`} 
                                        className="task-link"
                                        style={{ textDecoration: isCompleted ? 'none' : 'line-through' }}
                                    >
                                        {task.title}
                                    </Link>

                                    {/* Action Buttons */}
                                    <div>
                                        {/* Toggle Complete Button */}
                                        <button 
                                            className={`btn btn-sm ${isCompleted ? 'btn-outline-primary' : 'btn-success'} mx-1`}
                                            onClick={() => markTaskComplete(task.id)}
                                        >
                                            {isCompleted ? "✅ Mark Complete" : "✔ Completed"}
                                        </button>

                                        {/* 🗑️ Delete Task Button (New) */}
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            🗑 Delete
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            <div className="card-footer text-body-secondary">
                <small>Stay organized with your tasks!</small>
            </div>
        </div>
    );
}

export default TaskDashboard;
