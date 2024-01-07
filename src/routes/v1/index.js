import express from 'express'
import { createTweet } from '../../controllers/tweet-controller.js'
import { toggelLike } from '../../controllers/like-controller.js'
const router = express.Router()

router.post('/tweets', createTweet)
router.post('/likes/toggle', toggelLike)

export default router
