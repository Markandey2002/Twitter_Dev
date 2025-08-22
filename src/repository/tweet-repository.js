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

    async getWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate('comments');
            return tweet;

        } catch{
            console.log(error)
        }
    }

    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;

        } catch{
            console.log(error)
        }

    }

    async getAll(offset, limit){
        try{
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;

        } catch{
            console.log(error)
        }
    }
}
module.exports = TweetRepository;