import styled, { css } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import {LuCopyright} from "react-icons/lu";
import {useContext} from "react";
import AppContext from "../context/AppContext.jsx";



export const FooterScreen = () => {
    const value= useContext(AppContext)
    console.log(value)
    const isSmallDevice = useMediaQuery("only screen and (max-width : 845px)");
    console.log(isSmallDevice)

    return (
        <StyledFooter isSmallDevice={isSmallDevice}><div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            Copyright <LuCopyright style={{
            paddingLeft: '15px',
            fontSize: '3rem'
        }}/>
            <div style={{ fontSize: '15px', paddingLeft: '1rem'}}> Tony 2024
            </div>
        </div></StyledFooter>
    )
}

const StyledFooter = styled.div`
  display: flex;
  height: 10%;
  
  align-items: center;
  justify-content: center;
  color: ${() => '#ffffff'};

  ${(props) => !props.isSmallDevice && css`
        &::before,
        &::after {
            content: '';
            display: block;
            height: 0.09em;
            min-width: 30vw;
        }

        &::before {
            background: linear-gradient(to right, rgba(240, 240, 240, 0), #fff);
            margin-right: 4vh;
        }

        &::after {
            background: linear-gradient(to left, rgba(240, 240, 240, 0), #fff);
            margin-left: 4vh;
        }
    `}
`

