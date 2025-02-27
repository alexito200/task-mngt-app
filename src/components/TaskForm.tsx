import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { useEffect, useState } from 'react';

const TaskForm = () => {
    const { addTask, updateTask, tasks } = useTaskContext()!;
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const id = searchParams.get('id');
    const existingTask = tasks.find((t) => t.id === id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Set initial values only when editing an existing task
    useEffect(() => {
        if (existingTask) {
            setTitle(existingTask.title);
            setDescription(existingTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [existingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            id: id || Date.now().toString(),
            title,
            description,
            completed: true, // Ensure new tasks are always false
        };
    
        if (existingTask) {
            updateTask(newTask);
        } else {
            addTask(newTask);
        }
    
        navigate('/dashboard');
    };
    
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="card dashboardCard text-center">
                <h5 className="card-header">
                    {existingTask ? "Edit Task" : "Create a Task"}
                </h5>

                <div className="card-body">
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter task title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required  
                        />
                    </div>

                    <div className="mb-2">
                        <textarea 
                            className="form-control" 
                            placeholder="Enter task details" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {existingTask ? "Update Task" : "Save Task"}
                    </button>

                    <Link to="/dashboard" className="btn btn-secondary mx-2">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default TaskForm;
