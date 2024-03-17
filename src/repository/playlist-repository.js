import playlist from '../models/playlist.js'
import UserRepository from './user-repository.js'
const userRepo = new UserRepository()
class playlistRepository {
    async createNewPlaylist(data) {
        try {
            const user = await userRepo.findBy({ _id: data.userId })

            if (!user) {
                return res.status(401).json({
                    message: 'unauthorized access',
                })
            }

            const list = await playlist.find({
                userId: data.userId,
                name: data.name,
            })
            console.log(list, 'isList')

            if (list.length == 0) {
                console.log('jlkjlkj')
                const Playlist = await playlist.create({
                    videoId: data.videoId,
                    userId: data.userId,
                    name: data.name,
                })
                console.log(Playlist, 'newListinserted')
            } else {
                const findPlaylistAndSave = await playlist.findOne({
                    name: data.name,
                    userId: data.userId,
                })
                console.log(findPlaylistAndSave, 'findPlaliast')
                const checkId = findPlaylistAndSave?.videoId.filter((i) => {
                    if (i == data.videoId) {
                        return true
                    }
                })

                if (checkId.length == 0) {
                    const updateList = findPlaylistAndSave.videoId.push(
                        data.videoId
                    )
                    const j = await findPlaylistAndSave.save()
                }

                console.log(playlist.length, 'playlistrepo')
            }
        } catch (error) {}
    }

    async getAllPlaylist(data) {
        try {
            const getList = playlist.find({userId:data.userId})
            console.log(getList,"get")
            return getList
        } catch (error) {}
    }
}

export default playlistRepository
