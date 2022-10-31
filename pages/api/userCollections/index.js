import { userCollections } from "../../../data/userCollections";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(userCollections)
  } else if (req.method === 'POST') {
    const newUserSignUp = req.body.newUserSignUp

    const dataToPost = {
      id: Math.random(),
      user: newUserSignUp,
    }

    userCollections.push(dataToPost)

    res.status(201).json(dataToPost)
  }
  
}