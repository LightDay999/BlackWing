import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../_metronic/helpers'
import {Job, JobsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const JOB_URL = `${API_URL}/job`
const GET_JOBS_URL = `${JOB_URL}/query`
const CREATE_JOB_URL = `${JOB_URL}/create`
const UPDATE_JOB_URL = `${JOB_URL}/update`
const DELETE_JOB_URL = `${JOB_URL}/delete`

const getJobs = (query: string): Promise<JobsQueryResponse> => {
  return axios
    .get(`${GET_JOBS_URL}?${query}`)
    .then((d: AxiosResponse<JobsQueryResponse>) => d.data)
}

const getJobById = (id: ID): Promise<Job | undefined> => {
  return axios
    .get(`${JOB_URL}/${id}`)
    .then((response: AxiosResponse<Response<Job>>) => response.data)
    .then((response: Response<Job>) => response.data)
}

const createJob = (job: Job): Promise<Job | undefined> => {
  return axios
    .put(CREATE_JOB_URL, job)
    .then((response: AxiosResponse<Response<Job>>) => response.data)
    .then((response: Response<Job>) => response.data)
}

const updateJob = (job: Job): Promise<Job | undefined> => {
  return axios
    .post(`${UPDATE_JOB_URL}/${job.id}`, job)
    .then((response: AxiosResponse<Response<Job>>) => response.data)
    .then((response: Response<Job>) => response.data)
}

const deleteJob = (jobId: ID): Promise<void> => {
  return axios.delete(`${DELETE_JOB_URL}/${jobId}`).then(() => {})
}

const deleteSelectedJobs = (jobIds: Array<ID>): Promise<void> => {
  const requests = jobIds.map((id) => axios.delete(`${DELETE_JOB_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getJobs, deleteJob, deleteSelectedJobs, getJobById, createJob, updateJob}
