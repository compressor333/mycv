import React from 'react'
import styled, {css} from "styled-components";
import {useMediaQuery} from "@uidotdev/usehooks";
import {motion} from "framer-motion";
import star from "../assets/ninja-star-svgrepo-com.svg";
import '/src/index.css'


export const Hero = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 845px)");
    return (
        <FlexWrapperStyled isSmallDevice={isSmallDevice}>
            <h1 style={{
                fontSize: '3rem'
            }}>
                Java Script <br/>
                Developer
            </h1>
            <div style={{ position: 'relative'}}>
                <motion.img
                    src={star}
                    animate={{rotate: 360}}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear"
                    }}
                    style={{width: 100, height: 100}}
                />
            </div>
        </FlexWrapperStyled>
    )
}

const FlexWrapperStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgb(255, 255, 255);

  ${(props) => props.isSmallDevice ? css`
    flex-direction: column;
  ` : css`
    flex-direction: row;
  `}
`


