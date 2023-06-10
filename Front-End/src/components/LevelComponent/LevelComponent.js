import React from "react";
import '../DashboardComponent/DashboardComponent';
import Quiz from "../../pages/Quiz/Quiz";


function LevelComponent(props){
    

return(
  <div id={props.id}>
 <a href="#"  className={props.className} ><img src={props.img} alt="d"/><span>{props.text}</span></a>
 
 </div>
)


}

export default LevelComponent;
