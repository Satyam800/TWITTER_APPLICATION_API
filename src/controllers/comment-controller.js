import commentService from '../services/comment-service.js'

const commentServices = new commentService()

export const createComment = async (req, res) => {
    try {
        const response = await commentServices.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content)
        console.log(response, 'check2')
        return res.status(201).json({
            sucess: true,
            message: 'Succesfully create a new comment',
            data: response,
            error: {},
        })
    } catch (err) {
        console.log('Error response', err)
        return res.status(500).json({
            sucess: false,
            message: 'Something went wrong',
            data: {},
            error: err,
        })
    }
}