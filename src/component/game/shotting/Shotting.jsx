import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Shotting() {
    const  { unityProvider }  = new useUnityContext({
        loaderUrl: '/Work-Build/work.loader.js',
        dataUrl: '/Work-Build/work.data',
        frameworkUrl: 
        '/Work-Build/work.framework.js',
        codeUrl:'/Work-Build/work.wasm'
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

export default Shotting;