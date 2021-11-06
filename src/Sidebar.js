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
import {useStateValue} from './StateProvider';
function Sidebar() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="sidebar">

			<SideBarRow src={user.photoURL} title={user.displayName}/>
			<SideBarRow Icon={LocalHospitalIcon} title="COVID-19 information"/>
			<SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
			<SideBarRow Icon={PeopleIcon} title="Friends"/>
			<SideBarRow Icon={ChatIcon} title="Messanger"/>
			<SideBarRow Icon={StorefrontIcon} title="Marketplace"/>
			<SideBarRow Icon={VideoLibraryIcon} title="Video"/>
			<SideBarRow Icon={ExpandMoreOutlined} title="More"/>
		</div>

	)
}

export default Sidebar
