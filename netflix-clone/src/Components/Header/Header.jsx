import React from "react";
import "./Header.css";
import netflixLogo from "../../Assets/images/pic1.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const Header = () => {
	return (
		<div className="outerContainer">
			<div className="headerContainer">
				<div className="headerLeft">
					<ul>
						<li>
							<img src={netflixLogo} alt="" width="100" />
						</li>
						<li>Home</li>
						<li>TVShows</li>
						<li>Movies</li>
						<li>Latest</li>
						<li>MyList</li>
						<li>Browse by Languages</li>
					</ul>
				</div>
				<div className="headerRight">
					<ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownCircleIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
