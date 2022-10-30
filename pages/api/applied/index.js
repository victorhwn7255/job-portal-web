import { appliedJobs } from "../../../data/appliedJobs"

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(appliedJobs)
  } else if (req.method === 'POST') {
    const newAppliedJob = req.body.newAppliedJob
    const dataToPost = {
      id: Math.random(),
      appliedJob: newAppliedJob
    }
    appliedJobs.unshift(dataToPost)
    res.status(201).json(dataToPost)
  }
  
}