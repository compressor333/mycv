import {useState} from "react";
import AppContext from "./AppContext.jsx";
import {useMediaQuery} from "@uidotdev/usehooks";

const theme = [
    {
        flexDirection: 'row'
    },
    {
        flexDirection: 'column'
    }
]

const hello = () => {
    console.log('hellllllooo')
}

const value = {theme}

export const ContextProvider = ({children}) => {
    const [selectedStyle, setSelectedStyle] = useState(0)
    const [isReady, setIsReady] = useState(false)
    console.log('hello from provider')

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}
