import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirect = () => {
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "fa75e073cd2144e8db996b60e267b3b1";

    axios.post(`https://kauth.kakao.com/oauth/token?
        grant_type="authorization_code",
        &client_id=${client_id}
        &redirect_uri=http://localhost:3000/oauth/callback/kakao
        &code=${code}`
        , {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then((res) => {
      console.log(res)
      // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
  })
  }, [])

    return <div>
      토근 받기 완료
  </div>;
};

export default KakaoRedirect;