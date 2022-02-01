import mongoose from 'mongoose'

const HelpSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    temperature: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    createdBy: {
      type: String,
      required: true
    },
    createdByUid: {
      type: String,
      required: true
    },
    answer: {
      type: String
    },
    answeredBy: {
      type: String
    },
    answeredByUid: {
      type: String
    },
    answeredAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models.Help || mongoose.model('Help', HelpSchema)
