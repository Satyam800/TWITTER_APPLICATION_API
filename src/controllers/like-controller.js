import LikeService from '../services/like-service.js'

const likeService = new LikeService()
export const toggelLike = async (req, res) => {
    try {
        const response = await LikeService.toggelLike(
            req.query.modelId,
            req.query.userId
        )
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'successfully toggeled like',
        })
    } catch (err) {
       
        res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: err,
        })
    }
}
