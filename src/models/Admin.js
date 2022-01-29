import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  email: {
    type: String
  }
})

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
