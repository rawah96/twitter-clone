import React from 'react';
import './Post.css';
import me from './me.JPG'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="avatar">
                <Avatar src= {me}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="header-text">
                        <h3>
                            <span className="post-header-special">
                                @RawahAlsinan
                                <VerifiedUserIcon className="postBadge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="header-description">
                        <p>I Challenge You to Learn One Algorithm Per Day</p>
                    </div>
                </div>
                <img src={me} alt=""/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
