import React, {useState} from 'react'
import './TweetBox.css'
import me from './me.JPG'
import {Avatar, Button} from '@material-ui/core';
import db from '../../firebase';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e=> {
        e.prefentDefault(); // since it's a form, it's gonna refresh
        // posting to database -- yarab it works..
        db.collection('posts').add({
            displayName: 'Amani Al Senan',
            username: 'amanialsenan',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: ""
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        // reset to blank
        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweet-box">
            <form>
                <div className="box-input">
                    <Avatar src={me}/>
                    <input
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's Happening?" type="text"/>
                    <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="input-img"
                    placeholder="enter image url" type="text"/>
                </div>
                <Button onClick={sendTweet} type="submit"className="box-btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
