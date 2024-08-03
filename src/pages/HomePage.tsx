import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListning from '../components/JobsListning'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title='Become a React dev' description='find the React job that fits your skill set'/>
      <HomeCards />
      <JobsListning isHome = {true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage