const express = require('express');
const router = express.Router();
const {
  getBootCamp,
  createBootCamp,
  updateBootcamp,
  deleteBootcamp,
} = require('./../controllers/bootcamps');

router.route('/api/v1').get(getBootCamp).post(createBootCamp);
router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
