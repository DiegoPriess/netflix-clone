import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { get } from '../../api';
import './style.scss';

const AppMain = () => {
    
    let history = useHistory();
    const { userId } = useParams();
    const [ userData, setUserData ] = useState([]);
    const [ moviesThumbnail, setMoviesThumbnail ] = useState([]);
    
    useEffect(() => {
        get(`/movies_thumbnail/${userId}`, setMoviesThumbnail) 
        .catch(()=>{
            console.log("ERROR SEARCHING MOVIES DATA");
        })
        get(`/profile/${userId}`, setUserData) 
        .catch(()=>{
            console.log("ERROR SEARCHING USER DATA");
        })
    }, []);

    return (
        <>
            <Header userId={userId}/>
            <div className="app-main">
                <div className="app-main-content">
                    
                </div> 
            </div>
            
        </>
    )
}

export default AppMain;