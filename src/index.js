const express = require('express');

const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment');

app.listen(3000, async()=>{
    console.log('server started at port 3000')
    await connect();
    console.log('mongoDB connected');
    // const tweet = await  Tweet.create({
    //     content : ' Second Tweet',
    //     userEmail : 'abc@d.com'
    // });
    // const tweets = await Tweet.find({userEmail : 'abc@d'})
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content : 'tweet with a comment schema'});
    console.log(tweet);
    const comment = await Comment.create({content: 'new comment'});
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
});
   