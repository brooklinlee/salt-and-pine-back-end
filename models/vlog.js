import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    author: { type:Schema.Types.ObjectId, ref:'Profile'}
  }, { timestamps: true }
)

const vlogSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Utah Gems', 'Seasonal', 'Great Outdoors', 'Foodie Finds', 'Family Friendly', 'Travel', 'Events & Festivals', 'Personal Stories' ],
    default: 'Utah Gems'
  },
  author: { type:Schema.Types.ObjectId,ref:'Profile' },
  location:{ type: String },
  comments: [commentSchema],
  likes: [{ type:Schema.Types.ObjectId, ref:'Profile' }],
  saves: [{ type:Schema.Types.ObjectId, ref:'Profile' }],
  video: { type: String }
}, 
  { timestamps: true }
)

const Vlog = mongoose.model('Vlog', vlogSchema)

export { Vlog }