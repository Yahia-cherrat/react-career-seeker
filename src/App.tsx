import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListning from './components/JobsListning'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {

  return (
    <>
      <Navbar />
      <Hero title='Become a React dev' description='Find the React job that fits your skill set' />
      <HomeCards />
      <JobsListning />
      <ViewAllJobs />
    </>
  )
}

export default App