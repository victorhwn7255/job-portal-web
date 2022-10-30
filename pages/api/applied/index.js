import { appliedJobs } from "../../../data/appliedJobs"

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(appliedJobs)
  } else if (req.method === 'POST') {
    const newApplication = req.body.newApplication
    const dataToPost = {
      id: Math.random(),
      job: newApplication,
    }
    appliedJobs.push(dataToPost)
    res.status(201).json(dataToPost)
  }
  
}