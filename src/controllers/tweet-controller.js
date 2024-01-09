import TweetService from '../services/tweet-service.js'

const tweetService = new TweetService()

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body)
        console.log(response, 'check2')
        return res.status(201).json({
            sucess: true,
            message: 'Succesfully create a new tweet',
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

export const getTweet=async(req,res)=>{

    try {
        const response = await tweetService.get(req.params.id)
        console.log(response, 'check2')
        return res.status(200).json({
            sucess: true,
            message: 'Succesfully fetched a new tweet',
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