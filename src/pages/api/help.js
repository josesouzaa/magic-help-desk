import dbConnect from '../../services/dbConnect'
import Help from '../../models/Help'

export default async function handler(req, res) {
  const { method } = req
  const { email } = req.query
  const help = req.body

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const newHelp = await Help.create({
          title: help.title,
          temperature: help.temperature,
          description: help.description,
          createdBy: help.createdBy,
          createdByUid: help.createdByUid
        })
        await newHelp.save()
        res.status(201).json({ success: true, data: newHelp })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'GET':
      try {
        const helps = await Help.find({ createdBy: email })
        res.status(200).json({ success: true, data: helps })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
