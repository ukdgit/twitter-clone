import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './tweetBox.css';
import db from './firebase';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Umakant D.",
            username: "umakantrockss",
            verfied: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"></Avatar>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"></input>
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__ImageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"></input>
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;