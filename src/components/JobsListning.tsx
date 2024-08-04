import { useState, useEffect } from 'react'
import JobListing, { Job } from './JobListning'
import Spinner from './Spinner'

const JobsListing: React.FC<{ isHome?: boolean }> = ({ isHome = false }) => {

  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? `/api/jobs?_limit=3` : `/api/jobs`
      try {
        const res = await fetch(apiUrl)
        if (!res.ok) {
          throw new Error('Failed to fetch jobs')
        }
        const data: Job[] = await res.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default JobsListing