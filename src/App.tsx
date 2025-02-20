import TaskDashboard from './components/TaskDashboard';
import TaskContextProvider from "./context/TaskProvider";
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import HomePage from "./components/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import ProtectedPage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";

const App: React.FC = () => {

  const {isLoading} = useAuth0();

  if(isLoading) return (<div>Loading...</div>)

  return (

    <>
    <TaskContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<TaskDashboard />}/>
          <Route path='/profile' element={<AuthenticationGuard component={ProfilePage}/>} /> 
          <Route path='/protected' element={<AuthenticationGuard component={ProtectedPage}/>} /> 
          <Route path='/task/:id' element={<TaskDetails />}/>
          <Route path='/task/new' element={<TaskForm />}/>
          <Route path="/callback" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </TaskContextProvider>
    </>

  )
}

export default App;