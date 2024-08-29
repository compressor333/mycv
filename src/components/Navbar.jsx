import React from 'react'
import styled from "styled-components";
import {SignedIn, SignedOut, SignInButton, UserButton, SignOutButton, useUser} from "@clerk/clerk-react";

const button = {
    width: '6rem',
    height: '2rem',
    color: 'white',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '1px solid',
    borderRadius: '6px',
}

const Navbar = () => {
    const user = useUser()
    console.log(user)
    return (
        <Nav>
            <SignedIn>
                <h1 style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <UserButton />
                    <div style={{
                        padding: '0.9em'
                    }}>{user.user === undefined ? 'привет' : `Привет, ${user?.user?.firstName}.`}</div>
                </h1>
                <h1>
                    <SignOutButton style={button}>Logout</SignOutButton>
                </h1>
            </SignedIn>
            <SignedOut>
                <h1>Welcome</h1>
                <SignInButton style={button}>Login</SignInButton>

            </SignedOut>
        </Nav>
    )
}

const Nav = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
`
export default Navbar
