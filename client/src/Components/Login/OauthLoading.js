import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loginoauth from "./Loginoauth";
import { useDispatch } from "react-redux";


const Div = styled.div`
    margin: 0 auto;
    width: 440px;
    border: 1px solid black;
    transform: translateY(20%);
`;


function OauthLoading() {
    let code = new URL(window.location.href).searchParams.get('code')

    const sendcode = (code)=>{
        axios
        .post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=2af87592ef59bb8f2f504dc1544a0a89&redirect_uri=https://localhost:3000/oauthloding&code=${code}`,
            {headers : { "Content-Type" : "application/x-www-form-urlencoded" }}
        ).then((result)=> {
            localStorage.setItem("accessToken", result.data.access_token);
            
            axios
            .post(
                "https://localhost:4000/users/oauth",
                {
                    oauth : "KaKao",
                    code : result.data.access_token,
                }
        ).then((res)=>{
            console.log(res.data.nickname)
            }
        )}
        )
    }
    
    sendcode(code)

    //React.useEffect(sendcode(code),[])


return (
    
        <Div>
            loading~~~~~~~~~~~~~~~~~~~~~~~~
        </Div>


);
}

export default OauthLoading;
