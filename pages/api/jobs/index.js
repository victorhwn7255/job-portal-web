import { jobListings } from "../../../data/jobListings"

export default function handler(req, res) {
  res.status(200).json(jobListings)
}