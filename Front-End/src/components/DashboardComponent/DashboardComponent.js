import React, { useEffect, useState } from "react";
import './DashboardComponent.css';
import award from '../../assets/images/award.png';
import LevelComponent from "../../components/LevelComponent/LevelComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from "@ramonak/react-progress-bar";
import kennel1 from '../../assets/images/kennel1.png';
import kennel2 from '../../assets/images/kennel2.png';
import kennel3 from '../../assets/images/kennel3.png';
import kennel4 from '../../assets/images/kennel4.png';
import kennel5 from '../../assets/images/kennel5.png';
import kennel6 from '../../assets/images/kennel6.png';

function DashboardComponent({ email, points, level1, level2, level3, level4, level5, level6 }) {
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    useEffect(() => {
        if (points >= 120) {
            setIsQuizFinished(true)
        }
    }, [points]);

    const kennels = [kennel1, kennel2, kennel3, kennel4, kennel5, kennel6];
    const levels = [level1, level2, level3, level4, level5, level6];

    return (
        <div>
            <div className="main-div">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome {email} </p>
                    <div className="first-section">
                        <div className="award-bar">
                            <div className="award-div">
                                <img id="award" src={award} alt="d" />
                                <div className="points">
                                    Your Points:{points}
                                    <ProgressBar completed={points} customLabel=" " maxCompleted={120} />
                                </div>
                            </div>
                        </div>
                        <div className="play-button">
                            {!isQuizFinished
                                ? <h3><a href={'./quiz'} >Start to play <FontAwesomeIcon icon={faPlay} /></a></h3>
                                : "You finished the quiz."
                            }
                        </div>
                        <div>
                            <h3>Instructions</h3>
                            <p>Each correct answer worths 5 points.</p>
                            <p>Gaining each 20 points, player passes the next level.</p>
                            <p>When the player reaches 120 points the game ends.</p>
                            <p>Each wrong answer worth -5 points only in level 6.</p>
                            <p>When the game ended to play delete account and recreate it.</p>
                        </div>

                        <div>
                            <br />
                            <h3 style={{ color: "red" }}><a href="#">Delete Account <FontAwesomeIcon icon={faXmark} /> </a></h3>
                        </div>
                    </div>
                 </div>

                    <div className="learning-progress">
                        <h3 id="path">Your Learning Path</h3>
                        <div className="progress-icons">
                            {kennels.map((kennel, index) => (
                                <LevelComponent id={`kennel${index + 1}`} className={levels[index]} img={kennel} text={`Level${index + 1}`} desired={index + 1} />
                            ))}
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default React.memo(DashboardComponent);