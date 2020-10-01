const db = require('../models')

module.exports = {
    find: (req, res) => {
      db.Job
        .find()
        .sort({ date: -1 })
        .then(jobs => res.json(jobs))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
      db.Job
        .create(req.body)
        .then(job => res.json(job))
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Job
          .findById({ _id: req.params.id })
          .then(job => job.remove())
          .then(job => res.json({ success: true, deletedData: job }))
          .catch(err => res.status(404).json({ success: false, msg: err }));
    }
  };