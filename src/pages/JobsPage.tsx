import JobListning from "../components/JobListning"
import jobs from '../jobs.json'
import { Job } from '../components/JobListning'


const JobsPage = () => {
  const recentJobs: Job[] = jobs.jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job: Job) => (
            <JobListning key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobsPage