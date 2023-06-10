import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import PopupLogout from '../../components/Popup/PopupLogout';
import DashboardComponent from '../../components/DashboardComponent/DashboardComponent';
import PopupOnce from '../../components/PopupOnce/PopUpOnce';

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const [points, setPoints] = useState('');
    const [buttonPopup, setButtonPopup] = useState(false);
    const [showData, setShowData] = useState('hide');
    const [levels, setLevels] = useState({
        level1: '',
        level2: 'disabled',
        level3: 'disabled',
        level4: 'disabled',
        level5: 'disabled',
        level6: 'disabled',
    });

    const history = useNavigate();

    useEffect(() => {
        axios.get('http://localhost/session.php', { withCredentials: true })
            .then(response => {
                setEmail(response.data.Email);
                setLevel(response.data.Level);
                setPoints(response.data.points);

                if (response.data.UserID === 'unauthorised') {
                    setButtonPopup(true);
                    setTimeout(() => history.push('/login'), 3000);
                } else {
                    setShowData('');
                }

                setLevels(prevLevels => {
                    const updatedLevels = { ...prevLevels };
                    for (let i = 2; i <= response.data.Level; i++) {
                        updatedLevels[`level${i}`] = '';
                    }
                    return updatedLevels;
                });
            });
    }, [history]);

    if (buttonPopup) {
        return (
            <PopupLogout trigger={buttonPopup}>
                You should login first! Click here to sign in..
            </PopupLogout>
        );
    }

    return (
        <div>
            <div className={showData}>
                <Navbar login='hide' signup='hide' dashboard='hide' user={email} />
                <DashboardComponent email={email} level={level}
                    level1={levels.level1} level2={levels.level2} level3={levels.level3}
                    level4={levels.level4} level5={levels.level5} level6={levels.level6}
                    points={points}
                />
            </div>
            <PopupOnce user={email} level={level} />
        </div>
    );
}

export default Dashboard;
