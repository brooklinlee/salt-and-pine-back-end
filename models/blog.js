import mongoose from "mongoose"

const Schema = mongoose.Schema

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Utah Gems', 'Seasonal', 'Great Outdoors', 'Foodie Finds', 'Family Friendly', 'Travel', 'Events & Festivals', 'Personal Stories' ]
    },
    author: {
      type: Schema.Types.ObjectId, ref: 'Profile'
    },
    comments: [commentSchema],
    admin: {
      type: Boolean,
      default: false,
    },
    likes: [{
      type:Schema.Types.ObjectId, ref:'Profile'
    }],
    saves: [{type:Schema.Types.ObjectId, ref:'Profile'}],
    mainPhoto: {type: String},
    morePhotos: [photoSchema]
  },
  { timestamps: true }
)

const Blog = mongoose.model('Blog', blogSchema)

export { Blog }