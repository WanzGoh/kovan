import React from 'react'
import './styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle" 
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { useStateValue } from "./StateProvider";
import ImageLogo from "./image/kovan.png";
function Header() {

	// const[ { user }, dispatch] = useStateValue();

	return (
		<div>
			<div className="Header">
				<div className="Header__left">
					<img src={ImageLogo} alt="logo" />
					<div className="Header__input">
						<SearchIcon />
						<input placeholder="검색하기" type="text" />
					</div>
				</div>
				<div className="Header__mid">
					<div className="Header__option">
						<div className="Header__option--active">
						<HomeIcon fontSize="large" />
						</div>
					</div>
					<div className="Header__option">
						<div className="Header__option--active">
							<FlagIcon fontSize="large" />
						</div>
						
					</div>
					<div className="Header__option">
					<div className="Header__option--active">
						<SubscriptionsOutlinedIcon fontSize="large" />
						</div>
						
					</div>
					<div className="Header__option">
					<div className="Header__option--active">
						<StorefrontOutlinedIcon fontSize="large" />
						</div>
						
					</div>
					<div className="Header__option">
					<div className="Header__option--active">
					<SupervisedUserCircleIcon fontSize="large"/>
					</div>
						
					</div>
				</div>
				<div className="Header__right">
					<div className="Header__info">
						{/* <Avatar src={user.photoURL}/> */}
						<Avatar src=''/>
						<h4>
							연습
						</h4>
					</div>
					<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>

				</div>
				
			</div>
		</div>
	)
}

export default Header
