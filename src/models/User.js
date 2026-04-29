import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

export const User = mongoose.model('User', userSchema)
