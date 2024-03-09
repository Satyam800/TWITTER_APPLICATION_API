import express from 'express'
import { createTweet,getTweet } from '../../controllers/tweet-controller.js'
import { toggelLike } from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js'
import { signup,login,ResetPassword } from '../../controllers/auth-controller.js'
const router = express.Router()

router.post('/tweets', createTweet)
router.get('/tweet/:id',getTweet)
router.post('/likes/toggle', toggelLike)
router.post('/comment',createComment)
router.post('/signup',signup)
router.post('/login',login)
router.post('/resetPassword',ResetPassword)
export default router
