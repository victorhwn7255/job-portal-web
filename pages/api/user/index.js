import { userDetails } from "../../../data/userDetails";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(userDetails)
  } else if (req.method === 'POST') {
    const newApplication = req.body.newApplication
    const dataToPost = {
      id: Math.random(),
      user: newApplication,
    }
    userDetails.push(dataToPost)
    res.status(201).json(dataToPost)
  }
  
}