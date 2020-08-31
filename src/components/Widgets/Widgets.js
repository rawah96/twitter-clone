import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
function Widgets() {
    // installed react-twitter-embed
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-search"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widget-container">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"939913123234041856"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="SACM_USA"
                    options={{height:400}}
                />
                <TwitterShareButton 
                    url={"https://twitter.com/SACM_USA/status/939913123234041856"}
                    options={{text:"تم ايداع الرواتب!!", via:"SACM_USA"}}
                />
            </div>
        </div>
    )
}

export default Widgets
