import { Link } from 'react-router-dom'
import { useTaskContext } from "../context/TaskContext";
import { Task } from '../types'
import LogoutButton from './LogoutButton'
import "../App.css";

const TaskDashboard = () => {
    const { tasks, markTaskComplete } = useTaskContext()!

    return (
    <>

        <div className="card dashboardCard text-center">
            <h1 className="card-header">
                Task Dashboard
            </h1>
            <div className="card-body">
                <Link to={'/task/new'} className="btn btn-primary mx-2">Add New Task</Link>
                <LogoutButton />
                <ul>
                {tasks.map((task: Task) => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none',
                    listStyle: 'none'  }}>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                {!task.completed && (
                    <button className="btn btn-primary btn-sm mx-2 my-2" onClick={() => markTaskComplete(task.id)}>Mark Complete</button>
                )}
                </li>
            ))}
        </ul>
            </div>
            <div className="card-footer text-body-secondary">
            </div>
        </div>

    </>
)
}

export default TaskDashboard;