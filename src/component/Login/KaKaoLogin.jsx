import React from "react";
import { Link } from "react-router-dom";

function KaKaoLogin(){
    const keys = {
     key : process.env.REACT_APP_KAKAO_AUTH_URL,
  }
    const handleLogin = () => {
        console.log(keys.key)
        window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=fa75e073cd2144e8db996b60e267b3b1&redirect_uri=http://localhost:3000/&response_type=code"   
  }  
    
    const handleMove = () => {
    
  }  
    
    return (
        <div>
            
        <Link to="/KaKaoRedirect" className="nav-links">
            <img src="/images/KaKao/kakao_login_large_wide.png"
                onClick={handleLogin}>
                </img>
                
                </Link>
        </div>
    );
}
export default KaKaoLogin;
