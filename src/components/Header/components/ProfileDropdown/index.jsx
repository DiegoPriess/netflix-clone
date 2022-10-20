import React, { useEffect, useState } from 'react';
import { get } from '../../../../api';
import './style.scss';
import profileIcon0 from "../../../../assets/img/profileImages/0.jpeg";
import profileIcon1 from "../../../../assets/img/profileImages/1.jpeg";
import profileIcon2 from "../../../../assets/img/profileImages/2.jpeg";
import profileIcon3 from "../../../../assets/img/profileImages/3.jpeg";
import profileIcon4 from "../../../../assets/img/profileImages/4.jpeg";

const ProfileDropdown = (props) => {

    let profileIcons = [profileIcon0, profileIcon1, profileIcon2, profileIcon3, profileIcon4];

    const [userData, setUserData] = useState([]);
    
    useEffect(
        get(`/profile/${props.userId}`, setUserData) 
        .catch(()=>{
            console.log("ERROR SEARCHING USER DATA");
        })
    );

    return (
       <div className="profile-dropdown-container">
           <img src={profileIcons[userData.image]} alt="" />
       </div> 
    )
}

export default ProfileDropdown;