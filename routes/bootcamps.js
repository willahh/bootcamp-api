const express = require('express');
const {
  getBootCamps,
  getBootCamp,
  createBootCamp,
  updateBootcamp,
  deleteBootcamp,
} = require('./../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootCamps).post(createBootCamp);
router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);


module.exports = router;
