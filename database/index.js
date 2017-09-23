const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: string,
  url: string, 
  description: string
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */ err, ) => {
  if (err) return console.error(err);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;