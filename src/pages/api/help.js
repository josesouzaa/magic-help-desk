import dbConnect from '../../services/dbConnect'
import Help from '../../models/Help'

export default async function handler(req, res) {
  const { method } = req
  const body = req.body

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const newHelp = await Help.create({
          title: body.title,
          temperature: body.temperature,
          description: body.description,
          createdBy: body.createdBy,
          createdByUid: body.createdByUid
        })
        await newHelp.save()
        res.status(201).json({ success: true, data: newHelp })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT':
      try {
        const helpToUpdate = await Help.findByIdAndUpdate(
          body.helpId,
          { description: body.description },
          { new: true }
        )
        await helpToUpdate.save()
        res.status(201).json({ success: true, data: helpToUpdate })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE':
      try {
        await Help.findByIdAndDelete(body.helpId)
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
