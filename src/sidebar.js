import React from 'react';
import './sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './sidebarOption';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import {Button} from '@material-ui/core';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Mail" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
            <SidebarOption Icon={ListAltIcon} text="List" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet">Tweet</Button>
        </div>
    );
};

export default Sidebar;