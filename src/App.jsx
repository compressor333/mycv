import {FooterScreen} from "./components/Footer.jsx";
import {Hero} from "./components/Hero.jsx";
import {ContextProvider} from "./context/ContextProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Background from "./wrappers/backGround.jsx";
import {ClerkProvider} from "@clerk/clerk-react";

const key = 'pk_test_aW5ub2NlbnQtZm93bC03NC5jbGVyay5hY2NvdW50cy5kZXYk'

// TODO

// animate framer siuriken
// ninja styling
// add carousel
// add tech and about
// dark and light theme
// eng and rus switch

function App() {

    return (
        <ClerkProvider publishableKey={key}>
        <ContextProvider>
            <Background>
                    <Navbar/>
                    <Hero/>
                    <FooterScreen/>
            </Background>
        </ContextProvider>
        </ClerkProvider>
    )
}

export default App
