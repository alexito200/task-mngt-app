import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useTaskContext } from '../context/TaskContext'
import { useEffect, useState } from 'react'

const TaskForm = () => {
    const { addTask, updateTask, tasks } = useTaskContext()!
    const [ searchParams ] = useSearchParams()
    const navigate = useNavigate()

    const id = searchParams.get('id')
    const existingTask = tasks.find((t) => t.id === id)

    const [title, setTitle] = useState(existingTask?.title || '')
    const [description, setDescription] = useState(existingTask?.description || '')

    useEffect(() => {
        if (existingTask) {
            setTitle(existingTask.title)
            setDescription(existingTask.description)
        }
    }, [existingTask])

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        const newTask = {
            id: id || Date.now().toString(),
            title,
            description,
            completed:false
        }

        if(existingTask) {
            updateTask(newTask)
        } else {
            addTask(newTask)
        }

        navigate('/dashboard')

    }
return (
    <>

    <form onSubmit={handleSubmit}>
        <div className="card dashboardCard text-center">

            <h5 className="card-header">
                Create a Task
            </h5>

            <div className="card-body">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter task" value={title} onChange={(e) => setTitle (e.target.value)} required  />
                </div>
    
                <div className="mb-2">
                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Enter details" />
                </div>
    
                <button type='submit' className='btn btn-primary'>Save Task</button>
                <Link to={'/dashboard'}><button type='button' className='btn btn-primary mx-2'>Back to Dashboard</button></Link>
            </div>
                <div className="card-footer text-body-secondary"></div>
        </div>
    </form>

</>
)
}

export default TaskForm