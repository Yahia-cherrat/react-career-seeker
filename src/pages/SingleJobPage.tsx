import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { Job } from '../components/JobListning'

const SingleJobPage = () => {
    const { id } = useParams<{ id: string }>()
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`)
                if (!res.ok) {
                    throw new Error('Failed to fetch job')
                  }
                  const data: Job = await res.json()
                  setJob(data)
              } catch (error) {
                console.error('Error fetching jobs', error)
              } finally {
                setLoading(false)
              }
        } 
        fetchJob()
    }, [id])
  return (
    loading ? <Spinner loading={loading}/> : (
        job !== null ? <h1> { job.title } </h1> : <h1>Job not Found</h1>
    )
  )
}

export default SingleJobPage