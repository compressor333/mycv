import {useEffect} from "react";
import NET from "vanta/src/vanta.net.js";
import styled from "styled-components";

const Background = ({ children }) => {
    useEffect(() => {
        NET({
            el: '#vanta',
            showDots: true,
            scale: 2.00,
            scaleMobile: 1.00,
            color: 0xff0000,
            backgroundColor: 0x0,
            points: 13.00,
            maxDistance: 0.00,
            spacing: 6.00
        })
    })

    return (
        <BackGround id="vanta">
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
