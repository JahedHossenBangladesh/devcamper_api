const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamps);

router
  .route("/:id")
  .put(updateBootcamp)
  .get(getBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
