const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// api/jobs
router.route("/")
  .get(jobsController.find)
  .post(jobsController.create);

router
  .route("/:id")
  .delete(jobsController.remove);

module.exports = router;