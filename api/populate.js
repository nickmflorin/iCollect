import mongoose from 'mongoose';
import Collection from './models/collection';

const collections = [
  {
    name: 'This is a test collection',
    description: 'This is a description for my test collection.',
    items: [],
  },
];

mongoose.connect('mongodb://localhost/collections');

collections.map(data => {
  const collection = new Collection(data);
  collection.save();
});