import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import '../css/App.css';
import Clock from "../assets/clocktower.png";
import Willard from "../assets/willard.png";
import Morrill from "../assets/morill.png";
import Johnson from "../assets/johnson.png";
import Rand from "../assets/rand.png";
AOS.init({ duration: 1000 });

export default function GameBox() {

    return (
        
<div>
    <div data-aos="fade-up-right" className="gamebox">
        <div style={{height:'15px',
            width:'150%',
            marginLeft:'-10px',
            marginRight:'-10px',
            marginTop:'-10px',
            backgroundColor:'#51CB20',
            borderTopLeftRadius:'15px',
            borderTopRightRadius:'15px'
        }}>


            <form id="your_form" onSubmit="yourFunction()" style={{
                padding: "12px 20px", boxSizing: "border-box",
                borderRadius: '35px',  fontSize: '14pt'
            }}>
                <h1><b>Join Game</b></h1>
                <input name="search" method="get" action="result_Search.php" placeholder="Enter Pin"/>
                <input type="submit" value="Submit"
                       style={{backgroundColor: '#FF1B1C', color: 'white', borderRadius: '35px'}}/>

            </form>


        </div>
    </div>

    <div>
        <img src={Johnson} className="fix" style={{left:'0%',
            height: 'auto',
            width: 'auto',
            maxWidth: '200px',
            maxHeight: '200px', bottom:'-10px'}}/>

        <img src={Clock} className="fix" style={{left:'70%',
            height: 'auto',
            width: 'auto',
            maxWidth: '300px',
            maxHeight: '300px'}}/>
        <img src={Morrill} className="fix" style={{left:'17%',
            height: 'auto',
            width: 'auto',
            maxWidth: '300px',
            maxHeight: '300px'}}/>
        <img src={Willard} className="fix" style={{left:'45%',
            height: 'auto',
            width: 'auto',
            maxWidth: '300px',
            maxHeight: '300px', bottom:'-10px'}}/>


        <img src={Rand} className="fix" style={{left:'85%',
            height: 'auto',
            width: 'auto',
            maxWidth: '180px',
            maxHeight: '180px', bottom:'-10px'}}/>
    </div>

        </div>
    );
}