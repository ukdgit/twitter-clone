import React from 'react';
import './widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    );
};

export default Widgets;