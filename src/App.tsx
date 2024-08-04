import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import { NotFound } from './pages/NotFound'
import SingleJobPage from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'
import { Job } from './components/JobListning'
import EditJobPage from './pages/EditJobPage'

const App = () => {

  // Add new job
  const addJob = async (newJob: Job) => {
    await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newJob)
    })
    return
  }

  // Delete job
  const deleteJob = async (id: string) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  // Update job
  const updateJob = async (updatedJob: Job) => {
    await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedJob)
    })
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path="jobs" element={<JobsPage />}/>
        <Route path="add-job" element={<AddJobPage addFormSubmit={addJob}/>}/>
        <Route path="jobs/:id" element={<SingleJobPage deleteJob={deleteJob}/>}/>
        <Route path="edit-job/:id" element={<EditJobPage updateFormSubmit={updateJob}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
