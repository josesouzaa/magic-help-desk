import Admin from '../../models/Admin'
import dbConnect from '../../services/dbConnect'

export default async (req, res) => {
  await dbConnect()

  const admins = await Admin.find()

  res.status(200).json({ admins })
}
