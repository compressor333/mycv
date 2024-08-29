import {useContext, useEffect} from "react";
import NET from "vanta/src/vanta.net.js";
import styled from "styled-components";
import AppContext from "../context/AppContext.jsx";

const Background = ({ children }) => {
    const {value, click}= useContext(AppContext)


    useEffect(() => {
        NET({
            el: '#vanta',
            showDots: true,
            scale: 2.00,
            scaleMobile: 1.00,
            color: value.color,
            backgroundColor: 0x0,
            points: 13.00,
            maxDistance: 0.00,
            spacing: 6.00
        })
    })

    return (
        <BackGround id="vanta">
            <button style={{
                zIndex: '10',
                top: '10rem',
                left: '37.5rem',
                cursor: 'pointer'
            }} onClick={() => click()}>on/off</button>
            {children}
        </BackGround>
    )
}

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default Background
