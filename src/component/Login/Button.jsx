import React, { useState } from "react";

import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import './Button.css';
import Disable from "./Disable";
function Button(props) {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    function click() {
        console.log("클릭 발생")
    }

    console.log(props.changeColor);
    
    return (
        <form onSubmit={(props) => { 
            
        }}>
        <button
            className={props.changeColor ? 'changeColorBtn' : 'loginBtn'} onClick={() => {console.log("클릭이벤트 발생")}}
    >   
        로그인
            </button>
            </form>
            );
}
export default Button;