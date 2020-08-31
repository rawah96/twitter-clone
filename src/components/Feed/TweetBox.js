import React from 'react'
import './TweetBox.css'
import me from './me.JPG'
import {Avatar, Button} from '@material-ui/core';
function TweetBox() {
    return (
        <div className="tweet-box">
            <form>
                <div className="box-input">
                    <Avatar src={me}/>
                    <input placeholder="What's Happening?" type="text"/>
                    <input 
                    className="input-img"
                    placeholder="enter image url" type="text"/>
                </div>
                <Button className="box-btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
