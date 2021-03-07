import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init({ duration: 1000 });

export default function GameBox() {

    function yourFunction(){
        var action_src = "http://localhost/test/" + document.getElementsByName("pin")[0].value;
        var your_form = document.getElementById('your_form');
        your_form.action = action_src ;
    }

    return (
        
<div style={{
    width: '50%', 
    minWidth:'400px', 
    backgroundColor:'#FFFFFC', 
    borderRadius:'30px',
    margin:'auto',
    height: '250px', 
    maxWidth:'500px',
    padding:'30px', 
    alignItems:'center', 
    marginTop:'50px', 
    boxShadow: '5px 5px 10px'
    }} data-aos="fade-up-right">

    <div style={{width:'100%', margins:'auto'}}>

    <form  id = "your_form" onsubmit="yourFunction()" style ={{width: "80%", padding: "12px 20px", boxSizing: "border-box", 
            borderRadius:'35px', height: '10em', height: '200px',fontSize:'14pt'}}>
                <h1><b>Join Game</b></h1>
                <input type="text" name="pin" placeholder = "Enter Pin" />
                <input type="submit" value="Submit" style ={{backgroundColor:'#FF1B1C', color:'white', borderRadius:'35px'}}/>
          
            </form>
        </div>
        </div>
    );
}