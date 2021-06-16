import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Container, Menu } from 'semantic-ui-react';
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { cartItems } = useSelector(state => state.cart)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top" >
        <Container>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />

          <Menu.Menu position='right'>
            {cartItems.length>0&&<CartSummary/>}

            <Menu.Item>
              {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
              {/* props */}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}