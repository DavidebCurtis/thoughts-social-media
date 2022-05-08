const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deletePizza,
  createReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deletePizza);

// api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .put(createReaction)
  .delete(removeReaction);

module.exports = router;
