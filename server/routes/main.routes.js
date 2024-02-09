const router = require('express').Router();

const apiPostsRouter = require('./api/api.posts.routes');
const apiCommentsRouter = require('./api/api.comments.routes');
const apiCategoriesRouter = require('./api/api.categories.routes');

router.use('/api/posts', apiPostsRouter);
router.use('/api/comments', apiCommentsRouter);
router.use('/api/categories', apiCategoriesRouter);

module.exports = router;
