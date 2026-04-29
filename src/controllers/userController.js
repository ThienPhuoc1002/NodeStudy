import { User } from '../models/User.js'

export const getUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) return res.status(404).json({ message: 'Not found' })

  res.json(user)
}

export const createUser = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  if (!user) return res.status(404).json({ message: 'Not found' })

  res.json(user)
}

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id)

  if (!user) return res.status(404).json({ message: 'Not found' })

  res.json({ message: 'Deleted' })
}
