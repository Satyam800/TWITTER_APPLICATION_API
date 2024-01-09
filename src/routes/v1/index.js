import express from 'express'
import { createTweet,getTweet } from '../../controllers/tweet-controller.js'
import { toggelLike } from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js'
const router = express.Router()

router.post('/tweets', createTweet)
router.get('/tweet/:id',getTweet)
router.post('/likes/toggle', toggelLike)
router.post('/comment',createComment)
export default router
