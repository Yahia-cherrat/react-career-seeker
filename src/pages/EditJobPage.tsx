import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Job } from "../components/JobListning"
import jobsData from "../jobs.json"
import { toast } from 'react-toastify'

const jobs: Job[] = jobsData.jobs as Job[]

type EditJobPageProps = {
    updateFormSubmit: (job: Job) => void
}

const EditJobPage = ({ updateFormSubmit }: EditJobPageProps) => {
    const { id } = useParams<{ id: string }>()
    const [job, setJob] = useState<Job | null>(null)
    const [title, setTitle] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [salary, setSalary] = useState<string>('')
    const [companyName, setCompanyName] = useState<string>('')
    const [companyDescription, setCompanyDescription] = useState<string>('')
    const [contactEmail, setContactEmail] = useState<string>('')
    const [contactPhone, setContactPhone] = useState<string>('')

    const navigate = useNavigate()

    useEffect(() => {
        const selectedJob = jobs.find(job => job.id === id)
        if (selectedJob) {
            setJob(selectedJob)
            setTitle(selectedJob.title)
            setType(selectedJob.type)
            setDescription(selectedJob.description)
            setLocation(selectedJob.location)
            setSalary(selectedJob.salary)
            setCompanyName(selectedJob.company.name)
            setCompanyDescription(selectedJob.company.description)
            setContactEmail(selectedJob.company.contactEmail)
            setContactPhone(selectedJob.company.contactPhone)
        }
    }, [id])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!job) return

        const updatedJob: Job = {
            id: job.id,
            title,
            type,
            description,
            location,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        }

        updateFormSubmit(updatedJob)
        toast.success('Job updated successfully', { 
            pauseOnHover: false 
        })
        navigate(`/jobs/${id}`)
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                rows={4}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
                            <select
                                id="salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            >
                                <option value="Under $50K">Under $50K</option>
                                <option value="$50K - $60K">$50K - $60K</option>
                                <option value="$60K - $70K">$60K - $70K</option>
                                <option value="$70K - $80K">$70K - $80K</option>
                                <option value="$80K - $90K">$80K - $90K</option>
                                <option value="$90K - $100K">$90K - $100K</option>
                                <option value="$100K - $125K">$100K - $125K</option>
                                <option value="$125K - $150K">$125K - $150K</option>
                                <option value="$150K - $175K">$150K - $175K</option>
                                <option value="$175K - $200K">$175K - $200K</option>
                                <option value="Over $200K">Over $200K</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="companyDescription" className="block text-gray-700 font-bold mb-2">Company Description</label>
                            <textarea
                                id="companyDescription"
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                rows={4}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">Contact Email</label>
                            <input
                                type="email"
                                id="contactEmail"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contactPhone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
                            <input
                                type="tel"
                                id="contactPhone"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditJobPage
