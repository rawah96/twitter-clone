import React, {useState, useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post'
import db from '../../firebase'
import FlipMove from 'react-flip-move'
function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    // run this code & don't run it again afterwards
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
        // doc.id is the key for the flipmove
    ))
    }, [])

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>                
            </div>
            <TweetBox/>
            <FlipMove>
            {posts.map(post => (
                // should use document id in firebase as the id 3:22
            <Post 
                key={post.text}
                displayName={post.displayName} 
                username={post.username}
                verified={post.verified} 
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />))}
            </FlipMove>
        </div>
    )
}

export default Feed