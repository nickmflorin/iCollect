import mongoose, { Schema } from 'mongoose';

var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var collectionsSchema = new Schema({
  _id:    {type:ObjectIdSchema, default: new ObjectId()},
  name: {
    type: String,
    unique: true,
  },
  description: String,
  items: Array,
});

export default mongoose.model('collection', collectionsSchema);