import { useNavigate, useParams, Link } from "react-router-dom"
import { useTaskContext } from "../context/TaskContext"

const TaskDetails = () => {
    const { id } = useParams()
    const { tasks, deleteTask } = useTaskContext()!
    const navigate = useNavigate()
    const task = tasks.find((t) => t.id === id)

    
    if (!task) return <p>Task not found!</p>
    const handleDelete = () => {
        deleteTask(task.id);
        navigate('/dashboard')
    }
return (
    <>

<div className="card dashboardCard text-center">
    <h5 className="card-header">
        Task Details
    </h5>
    <div className="card-body">
        <div className="form-floating mb-3">
            <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Task details" 
                value={`${task.title} ${task.description}`}
                readOnly
            />
        </div>
        <button onClick={() => navigate(`/task/new/?id=${task.id}`)} className="btn btn-primary">Edit Task</button>
        <button onClick={handleDelete} className="btn btn-primary mx-2">Delete Task</button>
        <Link to={'/dashboard'}><button type='button' className='btn btn-primary'>Back to Dashboard</button></Link>
    </div>
    <div className="card-footer text-body-secondary">
    </div>
</div>


    </>
)
}

export default TaskDetails