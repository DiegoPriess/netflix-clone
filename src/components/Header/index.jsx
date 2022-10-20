import * as React from 'react';
import './style.scss';
import logo from '../../assets/img/logoHeader.png';
import { Link } from 'react-router-dom';
import ProfileDropdown from './components/ProfileDropdown';

const Header = (props) => {
    return(
        <div className="header">
            <div className="header-navigation">
                <div className="logo-container">
                    <img src={logo} alt="Logo da marca" className="logo-image" />
                </div>
                <div className="header-nav-container">
                    <nav>
                        <Link><p className="nav-icon active">Início</p></Link>
                        <Link><p className="nav-icon">Séries</p></Link>
                        <Link><p className="nav-icon">Filmes</p></Link>
                        <Link><p className="nav-icon">Bombando</p></Link>
                        <Link><p className="nav-icon">Minha lista</p></Link>
                        <Link><p className="nav-icon">Assista de novo</p></Link>
                    </nav>
                </div>
            </div>
            <div>
                <ProfileDropdown userId={props.userId} />
            </div>
        </div>
    )
}

export default Header;