import React, {forwardRef, useState} from 'react';
import './Post.css';
import me from './me.JPG'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import db from '../../firebase';



const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {

    const [click, setClick] = useState('');
    const [select, setSelect] = useState('');

    const deleteTweet = (e) => {
        e.preventDefault();
        db.collection('posts').remove({
            displayName: 'amani'
        })
    }

    return (
        <div className="post" ref={ref}>
            <div className="avatar">
                <Avatar src= {avatar}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="header-text">
                    <ExpandMoreIcon className="btn"
                    onClick={() => setClick('clicked')}
                    />

                        <h3>{displayName}</h3>
                        <h3>
                            <span className="post-header-special">
                                @{username}
                                {
                                verified &&
                                <VerifiedUserIcon className="postBadge"/>}
                            </span>
                        </h3>
                    </div>
                    <div className="header-description">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
});

export default Post
