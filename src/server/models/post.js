import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    require: [true, 'the title is necesary']
  },
  author: {
    type: String,
    required: [true, 'the author is necesary']
  },
  path: {
    type: String,
    required: [true, 'the path route is obligatory']
  },
  img: {
    type: String,
    required: [true, 'This post most to have a image']
  },
  date: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: false
  },
  category: {
    type: String,
    required: [true, 'You have to assign a category']
  }
});

export default mongoose.model('Post', postSchema);
