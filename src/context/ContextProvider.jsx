import {useState} from "react";
import AppContext from "./AppContext.jsx";

const theme = [
    {
        color: 0xff0000
    },
    {
        color: 0xffff
    }
]



export const ContextProvider = ({children}) => {
    const [selectedStyle, setSelectedStyle] = useState(0)
    const click = () => {
        setSelectedStyle(prevValue => prevValue === 0 ? 1 : 0)
    }
    const [isReady, setIsReady] = useState(false)
    const value = theme[selectedStyle]
    console.log(value)
    return (
        <AppContext.Provider value={{value, click}}>{children}</AppContext.Provider>
    )
}
