import React from 'react'
import "./styles/Sidebar.css";
import SideBarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
	return (
		<div className="sidebar">
			<SideBarRow src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title="고유완"/>
			<SideBarRow Icon={LocalHospitalIcon} title="COVID-19"/>
			<SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
			<SideBarRow Icon={PeopleIcon} title="Friend"/>
			<SideBarRow Icon={ChatIcon} title="Massagers"/>
			<SideBarRow Icon={StorefrontIcon} title="Marketplace"/>
			<SideBarRow Icon={VideoLibraryIcon} title="Video"/>
			<SideBarRow Icon={ExpandMoreOutlined} title="More"/>
		</div>

	)
}

export default Sidebar
