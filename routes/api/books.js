// const router = require("express").Router();
// const booksController = require("../../controllers/googleController");

// // Matches with "/api/google"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create)
// router.route("/:id")
// .get(booksController.findbyID)
//   .put(booksController.update)
//   .delete(booksController.remove)

// module.exports = router;
const router = require("express").Router();
const bookController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  .get(bookController.findAll);

module.exports = router;