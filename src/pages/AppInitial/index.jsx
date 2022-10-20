import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from '../../components/Header';
import { get } from '../../api';
import ProfileCards from '../../components/ProfileCards';
import { Link } from 'react-router-dom';

const AppInitial= () => {

    const [profilesList, setProfilesList] = useState([]);

    useEffect(() => {
        get(`/profile`, setProfilesList);
    }, []);

    return(
        <>
            <Header />
            <div className="app-initial">
                <div className="app-initial-content">
                    <h1>Quem está assistindo?</h1>
                    <div className="initial-profiles">
                        {
                            profilesList.map((profile) => {
                                return <ProfileCards image={parseInt(profile.image)} name={profile.name}/>
                            })
                        }
                    </div>
                    <div className="edit-profiles">
                        <button>Gerenciar perfis</button>
                    </div>
                </div> 
            </div>
            
        </>
    )
}

export default AppInitial;