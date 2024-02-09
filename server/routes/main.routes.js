const router = require('express').Router();



const apiPostsRouter = require('./api/api.posts.routes');
const apiCommentsRouter = require('./api/api.comments.routes');


router.use('/api/posts', apiPostsRouter);
router.use('/api/comments', apiCommentsRouter);


module.exports = router;
