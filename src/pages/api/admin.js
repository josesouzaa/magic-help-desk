import dbConnect from '../../services/dbConnect'
import Help from '../../models/Help'

export default async function handler(req, res) {
  const body = req.body
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'PUT':
      try {
        const helpToAnswered = await Help.findByIdAndUpdate(
          body.helpId,
          {
            answer: body.answer,
            answeredBy: body.answeredBy,
            answeredByUid: body.answeredByUid,
            answeredAt: new Date()
          },
          { new: true }
        )
        await helpToAnswered.save()
        res.status(201).json({ success: true, data: helpToAnswered })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const helpToDelete = await Help.findByIdAndDelete(body.helpId)
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
