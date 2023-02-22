import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "../Nav/Navbar";
function Lego() {
    const  { unityProvider }  = new useUnityContext({
        loaderUrl: '/Build/tsaa.loader.js',
        dataUrl: '/Build/tsaa.data.unityweb',
        frameworkUrl: 
        '/Build/tsaa.framework.js.unityweb',
        codeUrl:'/Build/tsaa.wasm.unityweb'
    });
    return (
      
      <div>
        <div>
        <p>games</p>
        <Unity unityProvider={ unityProvider } style={{ width: 960, height: 600}}></Unity>
            </div>
        </div>
        );

}

export default Lego;