const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deletePizza,
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deletePizza);

module.exports = router;
