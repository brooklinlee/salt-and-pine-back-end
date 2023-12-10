import { Profile } from "../models/profile.js"
import { Vlog } from "../models/vlog.js"

async function create(req, res) {
  try {
    // define author based on who is initiating the request
    req.body.author = req.user.profile
    // create a new vlog based on the data in req.body
    const vlog = await Vlog.create(req.body)
    // update the profile of the author by adding the new vlog to their vlog array
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { vlogs: vlog } },
      { new: true }
    )
    vlog.author = profile
    res.status(201).json(vlog)
  } catch (error) {
    console.log('❌', error)
    res.status(500).json(error)
  }
}


async function index(req, res){
  try {
    const vlogs = await Vlog.find({})
    .populate('author')
    .sort({ createdAt: 'desc' })
    console.log('Populated vlogs: ', vlogs)
    res.status(200).json(vlogs)
  } catch (error) {
    console.log('❌', error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    // find vlog by Id
    const vlog = await Vlog.findById(req.params.vlogId)
    // populate author
    .populate([
      {path: 'author'},
      {path: 'comments.author'}
    ])
    res.status(200).json(vlog)
    // return vlog
  } catch (error) {
    console.log('❌', error)
    res.status(500).json(error)
}
}

export {
  create,
  index,
  show
}