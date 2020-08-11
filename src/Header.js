import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import cyberTruck from "./cybertruck__font.png";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  };

  console.log(user);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Link>
  
      <img className="header__logo2"
        src={cyberTruck} />
     <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
  <span className="header__optionLineOne">Hello {user?.email}</span>
  <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
          </div>
        </Link>
        
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link> 



    </nav>
  );
}

export default Header;
