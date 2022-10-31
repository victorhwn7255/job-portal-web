import { jobsToApply} from "../../../data/jobToApply";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(jobsToApply)
  } else if (req.method === 'POST') {
    const newJobToApply = req.body.jobToApply
    const dataToPost = {
      id: Math.random(),
      jobToApply: newJobToApply,
    }
    jobsToApply.unshift(dataToPost)
    res.status(201).json(dataToPost)
  }
}