import * as React from 'react';
import './style.scss';
import profileIcon0 from "../../assets/img/profileImages/0.jpeg";
import profileIcon1 from "../../assets/img/profileImages/1.jpeg";
import profileIcon2 from "../../assets/img/profileImages/2.jpeg";
import profileIcon3 from "../../assets/img/profileImages/3.jpeg";
import profileIcon4 from "../../assets/img/profileImages/4.jpeg";

const ProfileCards = (props) => {
    let profileIcons = [profileIcon0, profileIcon1, profileIcon2, profileIcon3, profileIcon4]
    return(
        <div className="profile-card">
            <div className="profile-card-content">
                <img src={profileIcons[props.image]} alt="" />
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default ProfileCards;