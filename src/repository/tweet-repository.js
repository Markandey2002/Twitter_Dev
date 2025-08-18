const Tweet = require('../models/tweet')

class TweetRepository {

    async create(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;

        } catch{
            console.log(error)
        }

    }

    async get(id){
        try{
            const tweet = await Tweet.findById(id);
            return tweet;

        } catch{
            console.log(error)
        }

    }

    async update(){
        

    }

    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;

        } catch{
            console.log(error)
        }

    }
}
module.exports = TweetRepository;