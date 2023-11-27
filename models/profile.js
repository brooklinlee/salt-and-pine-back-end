import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  saves:[{type:Schema.Types.ObjectId,ref:'Blog'}],
  admin: {
    type: Boolean,
    default: false,
  },
  blogs: [{ type: Schema.Types.ObjectId, ref:'Blog' }]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
