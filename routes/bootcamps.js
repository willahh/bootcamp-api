const express = require('express');
const {
  getBootCamp,
  createBootCamp,
  updateBootcamp,
  deleteBootcamp,
} = require('./../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootCamp).post(createBootCamp);
router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);


module.exports = router;
