const db = require('../models')

module.exports = {
    find: (req, res) => {
      db.Job
        .find()
        .sort({ date: -1 })
        .then(jobs => res.json(jobs))
        .catch(err => res.status(422).json(err));
    }
  };